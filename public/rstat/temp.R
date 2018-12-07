x=input.data
fitdistr(x,"normal")

install.packages("LaplacesDemon")
library(LaplacesDemon)
x2=dst(x, mu= 0.55034483, sigma=0.25438882 , nu=29, log=FALSE)
plot(x2,type = "l",xlim = c(-10,40))
plot(yfit,type = "l",xlim = c(-10,40))
