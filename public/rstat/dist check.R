df=read.csv("scores.csv",header = T)
#install.packages("nortest")
input.data=df[,2]
library(nortest)
ad_res=ad.test(input.data)
spw_res=shapiro.test(input.data)
qqnorm(x=df[,1],y = df[,2])

install.packages("fitdistrplus")
library(fitdistrplus)  
res=descdist(input.data, discrete = FALSE)

df1=read.csv("scores modified.csv",header = F)
shapiro.test(df1[,2])
qqnorm(x=df1[,1],y = df1[,2])

df2=read.csv("company_37_11.csv")
ad.test(df2[,2])
shapiro.test(df2[,2])
qqnorm(x=df2[,1],y = df2[,2])

install.packages("psych")
library(psych)
describe.by(df2[,2])
t.test(df2[,2])

x1=dt(x = df2[,2],df = 33)
fitdist(df2[,2],distr = "t")
#install.packages("MASS")
library(MASS)

tdist_res_norm=fitdistr(df2[,2],densfun = "normal")
z=tdist_res_norm$estimate
tdist_res=fitdistr(df2[,2],densfun = "t")
tdist_res$vcov
tdist_res$loglik
V=tdist_res$estimate
V=V[1:2]
tdat=df2[,2]
plot(x=tdat,y = dnorm(x =tdat ,mean = V[1],sd = V[2]),type = "l",xlim = c(0,20))
tdat=sort(df2[,2])
V=fitdist(df2[1:20,2],distr = "t")
plot(x=tdat,y = dnorm(x =tdat ,mean = z[1],sd = z[2]),type = "l",xlim = c(0,20))
plot(x=tdat,y = dnorm(x =tdat ,mean = V[1],sd = V[2]),type = "l",xlim = c(0,20),add=T)

#normal dist
h=hist(tdat)
xfit<-tdat 
yfit<-dnorm(x =tdat ,mean = z[1],sd = z[2])
yfit <- yfit*diff(h$mids[1:2])*length(tdat) 
lines(xfit, yfit, col="blue", lwd=2)

#normal
h=hist(tdat)
xfit<-tdat 
yfit<-dnorm(x =tdat ,mean = V[1],sd = V[2])
yfit <- yfit*diff(h$mids[1:2])*length(tdat) 
points(yfit)
lines(xfit, yfit, col="blue", lwd=2)


tdist_res_norm2=fitdistr(df[,2],densfun = "normal")
V=tdist_res_norm2$estimate
tdat=df[,2]
xfit<-c(1:30) 
yfit<-dnorm(x =tdat ,mean = V[1],sd = V[2])
plot(xfit, yfit, col="blue", lwd=2,type = "l")

# tdist_res_norm2=fitdistr(df[,2],densfun = "normal")
# V=tdist_res_norm2$estimate
# tdat=df[,2]
# h=hist(tdat)
# xfit<-tdat
# yfit<-dnorm(x =tdat ,mean = V[1],sd = V[2])
# yfit1 <- yfit*diff(h$mids[1:2])*length(tdat) 
# lines(xfit, yfit1, col="red", lwd=2)
dt(input.data,df = length(input.data))
tdist_res_norm3=fitdist(df[,2],distr = "t")
V=tdist_res_norm3$estimate
tdat=df[,2]
xfit<-c(1:30) 
yfit<-dnorm(x =tdat ,mean = V[1],sd = V[2])
plot(xfit, yfit, col="blue", lwd=2,type = "l")
data_mod=data.frame(xfit,yfit)
fit_y=lm(formula = yfit~poly(xfit,2,raw=TRUE),data = data_mod)
summary(fit_y)
lm_eq=fit_y$coefficients[1]+fit_y$coefficients[2]*xfit+fit_y$coefficients[3]*xfit

xfit=c(1:30)
cor(xfit,tdat)
plot(xfit,tdat)
mod_30=lm(formula = tdat~xfit)
summary(mod_30)
abline(mod_30)
sqrt(mean(mod_30$residuals^2))


colnames(df2)=c("x","y")
df2=data.frame(x=c(1:34),y=sort(df2$y))
xfit=df2[,1]
yfit=df2[,2]
cor(xfit,yfit)
plot(xfit,yfit)
mod=lm(formula = yfit~xfit)
summary(mod)
abline(mod)
sqrt(mean(mod$residuals^2))



temp1=c(0:10)
temp2=c(0.11,0.19,0.3,0.41,.48,0.58,.64,.69,.83,.92,1.04)
cor(temp1,temp2)
plot(temp1,temp2)
mod=lm(formula = temp2~temp1)
summary(mod)
abline(mod)
sqrt(mean(mod$residuals^2))
