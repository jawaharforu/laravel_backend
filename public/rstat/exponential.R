library(fitdistrplus)
#install.packages("logspline")
library(logspline)
library(psych)
library(jsonlite)
cts=c(6.53,4.12,2.05,1.5,1,0.8,0.6,0.5,0.23,0.01)
input.data=cts
time=c(1:10)

fit_ep <- fitdist(input.data, "exp")

exponential_est=fit_ep$estimate
exponential_dist=dexp(input.data, rate = exponential_est, log = FALSE)



exp_model=lm(log(cts)~time)
exp_pre=exp(predict(exp_model,list(Time=time)))

plot(cts,exponential_dist,type = "l")


plot(time,cts,ylim=c(0,8))
lines(time,exp_pre)

# points(exp_pre)
summary(exp_model)
coef_exp=exp_model$coefficients
a=coef_exp[1]
a1=exp(a) #10^log(a)
exponent_eq=a1*exp(coef_exp[2]*time)

mod=exp_model
rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(a1,"*","exp(",mod$coefficients[2],"*","x",")")
eq_res=mod$fitted.values
summary_dat=data.frame(describe.by(input.data))
out_exponential=list(input=input.data,dist_data=exponential_dist,equation=c(eq_val),equation_val=c(exponent_eq),
                     mean=summary_dat$mean,
                     median=summary_dat$median,
                     max=summary_dat$max,
                     sd=summary_dat$sd,
                     se=summary_dat$se,
                     skewness=summary_dat$skew,
                     kurtosis=summary_dat$kurtosis,
                     variance=summary_dat$sd^2,
                     r_squared=rsq_adjrsq$r.squared,
                     adjust_r_squared=rsq_adjrsq$adj.r.squared,rmse=rmse)

write_json(x = out_exponential,"Exp_dist.json")
