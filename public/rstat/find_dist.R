library(fitdistrplus)
library(psych)
library(jsonlite)
#install.packages("poweRlaw")
library(poweRlaw)
#install.packages("igraph")
library(igraph)
#install.packages("rsq")
library(rsq)
# install.packages("hydroGOF")
library(hydroGOF)



args <- commandArgs(TRUE)
#args[1]="ccompany_51_22.csv"
df=read.csv(args[1])
input.data=df[,2]
descdist(input.data)

# par(mfrow=c(1,1))
fit_w  <- fitdist(input.data, "weibull")
fit_g  <- fitdist(input.data, "gamma")
fit_ln <- fitdist(input.data, "lnorm")
fit_bt <- fitdist(input.data, "beta")
fit_ep <- fitdist(input.data, "exp")
fit_unf <- fitdist(input.data, "unif")
fit_log <- fitdist(input.data, "logis")
fit_power=fit_power_law(x = input.data)
# qqcomp(list(fit_ln))


# par(mfrow=c(2,2))
# plot.legend <- c("Weibull", "gamma", "lognormal","exp","unif","logis")
# denscomp(list(fit_w, fit_g, fit_ln,fit_ep,fit_unf,fit_log,fit_power))
# cdfcomp(list(fit_w, fit_g, fit_ln,fit_ep,fit_unf,fit_log,fit_power))
# qqcomp(list(fit_w, fit_g, fit_ln,fit_ep,fit_unf,fit_log,fit_power))
# ppcomp(list(fit_w, fit_g, fit_ln,fit_ep,fit_unf,fit_log,fit_power))

# descdist(input.data)
# legend("topleft",legend = plot.legend)
fits_val=list(fit_w, fit_g, fit_ln,fit_bt,fit_ep,fit_unf,fit_log,fit_power)
aic=c(fit_w$aic, fit_g$aic, fit_ln$aic,fit_bt$aic,fit_ep$aic,fit_unf$aic,fit_log$aic)
min_ind=which(aic==min(aic,na.rm = T))
min_aic=aic[min_ind]

loglke=c(fit_w$loglik,fit_g$loglik,fit_ln$loglik,fit_ep$loglik,fit_unf$loglik,fit_log$loglik,fit_power$logLik)
max_ind=which(loglke==max(loglke,na.rm = T))
max_lke=loglke[max_ind]

summary_res=lapply(fits_val,summary)
if(min_ind==max_ind)
{
  dist_index=min_ind
  final_dist=summary_res[min_ind]
} else {
  if(max_ind!=7){dist_index=min_ind
  final_dist=fits_val[min_ind]
  }
  else {
    dist_index=max_ind
    final_dist=summary_res[max_ind]
  }
}


summary_dat=data.frame(describe.by(input.data))
# y3=c(6.53,4.12,2.05,1.5,1,0.8,0.6,0.5,0.23,0.01)
# y4=y3/10

# y2=c(0.01,1.00,1.15,1.3,1.52,1.84,2.01,2.05,2.30,2.25)
# fitdist(y2, "lnorm")
# dlogarithmic(x = input.data)
# y3=c(6.53,4.12,2.05,1.5,1,0.8,0.6,0.5,0.23,0.01)
# fitdist(y3, "exp")
# fitdistr(y3,densfun = "exponential")

if(dist_index==1)
{
#weibull
weibull_est=fit_w$estimate
weibull_dist=dweibull(x = input.data,shape = weibull_est[1],scale = weibull_est[2])
time=df[,1]
weibull_model=lm(input.data~poly(time,degree = 2))
summary(weibull_model)
coef_exp=weibull_model$coefficients
weibull_eq=coef_exp[1]+coef_exp[2]*time+coef_exp[3]*time^2
mod=weibull_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(coef_exp[1],"+",coef_exp[2],"*","x","+",coef_exp[3],"*","x^2")
eq_res=mod$fitted.values

out_weibull=list(dist_name="Weibull",input=input.data,dist_data=weibull_dist,equation=c(eq_val),equation_val=c(weibull_eq),predicted_val=c(eq_res),
                 mean=summary_dat$mean,
                 median=summary_dat$median,
                 max=summary_dat$max,
                 sd=summary_dat$sd,
                 se=summary_dat$se,
                 skewness=summary_dat$skew,
                 kurtosis=summary_dat$kurtosis,
                 variance=summary_dat$sd^2,
                 r_squared=rsq_adjrsq$r.squared,
                 adjust_r_squared=rsq_adjrsq$adj.r.squared,rmse=rmse,
                 mae=mae(input.data,mod$fitted.values))
out_result=out_weibull
}

if(dist_index==2)
{
  
#gamma
gamma_est=fit_g$estimate
gam_dist=dgamma(x = input.data,shape = gamma_est[1],scale = gamma_est[2])
time=df[,1]
gamma_model=glm(input.data~log(time),family = Gamma)
coef_exp=gamma_model$coefficients
a=coef_exp[1]
glm_eq=a+coef_exp[2]*log(time)
# plot(glm_eq,type="l")
mod=gamma_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(a,"+","(",coef_exp[2],"*","ln(x)",")")
eq_res=mod$fitted.values
out_gamma=list(dist_name="Gamma",input=input.data,dist_data=gam_dist,equation=c(eq_val),equation_val=c(glm_eq),predicted_val=c(eq_res),
               mean=summary_dat$mean,
               median=summary_dat$median,
               max=summary_dat$max,
               sd=summary_dat$sd,
               se=summary_dat$se,
               skewness=summary_dat$skew,
               kurtosis=summary_dat$kurtosis,
               variance=summary_dat$sd^2,
               r_squared=rsq(mod,adj=F),
               adjust_r_squared=rsq(mod,adj=T),rmse=rmse,
               mae=mae(input.data,mod$fitted.values))
out_result=out_gamma
}

if(dist_index==3)
{
#lognormal
lognormal_est=fit_ln$estimate
lognormal_dist=dlnorm(x = input.data, meanlog = lognormal_est[1], sdlog = lognormal_est[2], log = FALSE)
time=df[,1]
log_model=lm(input.data~log(time))
log_pre=predict(log_model,list(Time=time))
summary(log_model)
coef_exp=log_model$coefficients
a=coef_exp[1]
lognorm_eq=a+coef_exp[2]*log(time)
mod=log_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(a,"+",mod$coefficients[2],"*","log(x)")
eq_res=mod$fitted.values

out_log=list(dist_name="Lognormal",input=input.data,dist_data=lognormal_dist,equation=c(eq_val),equation_val=c(lognorm_eq),predicted_val=c(eq_res),
                     mean=summary_dat$mean,
                     median=summary_dat$median,
                     max=summary_dat$max,
                     sd=summary_dat$sd,
                     se=summary_dat$se,
                     skewness=summary_dat$skew,
                     kurtosis=summary_dat$kurtosis,
                     variance=summary_dat$sd^2,
                     r_squared=rsq_adjrsq$r.squared,
                     adjust_r_squared=rsq_adjrsq$adj.r.squared,rmse=rmse,
             mae=mae(input.data,mod$fitted.values))
out_result=out_log
}

if(dist_index==4)
{
#beta
beta_est=fit_bt$estimate
bt_dist=dbeta(x = input.data,shape1 = beta_est[1],shape2 = beta_est[2])
beta_model=lm(input.data~poly(time,degree = 2))
summary(beta_model)
coef_exp=beta_model$coefficients
beta_eq=coef_exp[1]+coef_exp[2]*time+coef_exp[3]*time^2
mod=beta_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(coef_exp[1],"+",coef_exp[2],"*","x","+",coef_exp[3],"*","x^2")
eq_res=mod$fitted.values

out_beta=list(dist_name="Beta",input=input.data,dist_data=bt_dist,equation=c(eq_val),equation_val=c(beta_eq),predicted_val=c(eq_res),
              mean=summary_dat$mean,
              median=summary_dat$median,
              max=summary_dat$max,
              sd=summary_dat$sd,
              se=summary_dat$se,
              skewness=summary_dat$skew,
              kurtosis=summary_dat$kurtosis,
              variance=summary_dat$sd^2,
              r_squared=rsq_adjrsq$r.squared,
              adjust_r_squared=rsq_adjrsq$adj.r.squared,rmse=rmse,
              mae=mae(input.data,mod$fitted.values))
out_result=out_beta
}


if(dist_index==5)
{
#exponential
exponential_est=fit_ep$estimate
exponential_dist=dexp(input.data, rate = exponential_est, log = FALSE)
input.data1=sort(input.data,decreasing = T)
#time=df[,1]
time=sort(df[,1],decreasing = T)
exp_model=lm(log(input.data1)~time)
# exp_pre=exp(predict(exp_model,list(Time=time)))
summary(exp_model)
coef_exp=exp_model$coefficients
a=coef_exp[1]
a1=exp(a) #10^log(a)
exponent_eq=a1*exp(coef_exp[2]*time)
# plot(x=input.data,y=exponential_dist)
# plot(eq_res,type="l")
mod=exp_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(a1,"*","exp(",mod$coefficients[2],"*","x",")")
eq_res=mod$fitted.values

out_exponential=list(dist_name="Exponential",input=input.data,dist_data=exponential_dist,equation=c(eq_val),equation_val=c(exponent_eq),predicted_val=c(eq_res),
         mean=summary_dat$mean,
         median=summary_dat$median,
         max=summary_dat$max,
         sd=summary_dat$sd,
         se=summary_dat$se,
         skewness=summary_dat$skew,
         kurtosis=summary_dat$kurtosis,
         variance=summary_dat$sd^2,
         r_squared=rsq_adjrsq$r.squared,
         adjust_r_squared=rsq_adjrsq$adj.r.squared,rmse=rmse,
         mae=mae(input.data1,mod$fitted.values))
out_result=out_exponential

}








# plot(x=input.data,y=gam_dist)

if(dist_index==6)
{
  
#uniform
uniform_est=fit_unf$estimate
uniform_dist=dunif(x = input.data, min = uniform_est[1], max = uniform_est[2], log = FALSE)
time=df[,1]
unif_model=lm(input.data~poly(time,degree = 2))
summary(unif_model)
coef_exp=unif_model$coefficients
unif_eq=coef_exp[1]+coef_exp[2]*time+coef_exp[3]*time^2
mod=unif_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(coef_exp[1],"+",coef_exp[2],"*","x","+",coef_exp[3],"*","x^2")
eq_res=mod$fitted.values

out_uniform=list(dist_name="Uniform",input=input.data,dist_data=uniform_dist,equation=c(eq_val),equation_val=c(unif_eq),predicted_val=c(eq_res),
                     mean=summary_dat$mean,
                     median=summary_dat$median,
                     max=summary_dat$max,
                     sd=summary_dat$sd,
                     se=summary_dat$se,
                     skewness=summary_dat$skew,
                     kurtosis=summary_dat$kurtosis,
                     variance=summary_dat$sd^2,
                     r_squared=rsq_adjrsq$r.squared,
                     adjust_r_squared=rsq_adjrsq$adj.r.squared,rmse=rmse,
                 mae=mae(input.data1,mod$fitted.values))
out_result=out_uniform
}



if(dist_index==7)
{
  
#logistic
logistic_est=fit_log$estimate
logistic_dist=dlogis(x = input.data, location = logistic_est[1], scale = logistic_est[2], log = FALSE)
time=df[,1]
logis_model=glm(input.data~time,family = binomial(link = "logit"))
coef_exp=logis_model$coefficients
a=coef_exp[1]
log_eq=a+coef_exp[2]*log(time)
mod=logis_model
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(a,"+",coef_exp[2],"*","log(x)")
eq_res=mod$fitted.values
out_logistic=list(dist_name="Logistic",input=input.data,dist_data=logistic_dist,equation=c(eq_val),equation_val=c(log_eq),predicted_val=c(eq_res),
               mean=summary_dat$mean,
               median=summary_dat$median,
               max=summary_dat$max,
               sd=summary_dat$sd,
               se=summary_dat$se,
               skewness=summary_dat$skew,
               kurtosis=summary_dat$kurtosis,
               variance=summary_dat$sd^2,
               r_squared=rsq(mod,adj=F),
               adjust_r_squared=rsq(mod,adj=T),rmse=rmse,
               mae=mae(input.data1,mod$fitted.values))
out_result=out_logistic
}

if(dist_index==8)
{
#power law
powerlaw_dist=dpldis(x = input.data, xmin=fit_power$xmin, alpha=fit_power$alpha, log = FALSE)
powx=df[,1]
pow_model=lm(log10(input.data1)~powx)
pow_coeff=pow_model$coefficients
a=10^pow_coeff[1]
b=pow_coeff[2]
pow_eq=a*(powx^b)
# plot(pow_eq)
# plot(powerlaw_dist)
mod=pow_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0("10^",a,"*","(x","^",b,")")
eq_res=mod$fitted.values
out_powerlaw=list(dist_name="Power Law",input=input.data,dist_data=powerlaw_dist,equation=c(eq_val),equation_val=c(pow_eq),predicted_val=c(eq_res),
                  mean=summary_dat$mean,
                  median=summary_dat$median,
                  max=summary_dat$max,
                  sd=summary_dat$sd,
                  se=summary_dat$se,
                  skewness=summary_dat$skew,
                  kurtosis=summary_dat$kurtosis,
                  variance=summary_dat$sd^2,
                  r_squared=rsq_adjrsq$r.squared,
                  adjust_r_squared=rsq_adjrsq$adj.r.squared,rmse=rmse,
                  mae=mae(input.data1,mod$fitted.values))
out_result=out_powerlaw

}

 
# out_result=switch(dist_index,
#                    out_weibull,out_gamma,out_log,out_beta,
#                   out_exponential,out_uniform,out_logistic,out_powerlaw)



# reult_dist=switch(dist_index,
#                    weibull_dist,gam_dist,lognormal_dist,bt_dist,
#                   exponential_dist,uniform_dist,logistic_dist,powerlaw_dist)



fl=basename(args[1])
write_json(x = out_result,paste0(substr(fl,1,nchar(fl)-4),"_find_dist.json"))
