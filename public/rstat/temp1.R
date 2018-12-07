install.packages("metRology")
library(metRology)
ip=df[,2]
xy1=metRology::dt.scaled(x = ip,mean = mean(ip),sd = sd(ip),df = 29)
metRology::pt.scaled(q = 0.95,df = 29,mean = mean(ip),sd = sd(ip))
metRology::qt.scaled(p = 0.934,df = 29,mean = mean(ip),sd = sd(ip))

plot(xy1,type = "l")

s1=seq(-5,5,length.out = 30)


plot(x = s1,y = xy1,type = "l")
