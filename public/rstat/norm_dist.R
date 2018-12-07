library(fitdistrplus) 
library(MASS)
library(jsonlite)
library(psych)
args <- commandArgs(TRUE)
#args="http://staging-epes.drupalised.com/uploads/company_37_11.csv"
df=read.csv(args[1],header = T)
#df=read.csv("scores.csv",header = T)
input.data=df[,2]
deof=length(input.data)-1

tdist_res_norm=fitdistr(input.data,densfun = "normal")
z=tdist_res_norm$estimate
xfit<-input.data

yfit<-dnorm(x =input.data,mean = z[1],sd = z[2])
  #metRology::dt.scaled(x = input.data,mean = mean(input.data),sd = sd(input.data),df = 29)
  #dnorm(x =input.data,mean = z[1],sd = z[2])
out_y=c(yfit)
# plot(yfit,type = "l")


colnames(df)=c("x","y")
df2=data.frame(x=df$x,y=df$y)
xfit_lm=df2[,1]
yfit_lm=df2[,2]
# cor(xfit_lm,yfit_lm)
mod=lm(formula = yfit_lm~xfit_lm)



rsq_adjrsq=summary(mod)
rmse=sqrt(mean(mod$residuals^2))
eq_val=paste0(mod$coefficients[1],"+",mod$coefficients[2],"*","x")
eq_res=mod$fitted.values
# plot(eq_res,type="l")
# points(input.data)
# qqnorm(x = df[,1],y = df[,2])


summary_dat=data.frame(describe.by(input.data))

out=list(input=input.data,norm_data=out_y,equation=c(eq_val),equation_val=c(eq_res),
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
fl=basename(args[1])
write_json(x = out,paste0(substr(fl,1,nchar(fl)-4),"_norm.json"))
    