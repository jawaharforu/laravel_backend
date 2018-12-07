#install.packages("nortest")
library(nortest)
library(outliers)
args <- commandArgs(TRUE)
#args="fact.csv"
df=read.csv(args[1],header = T,skip = 1)
df=df[,-1]
fact_res=factanal(df,factors=3,rotation="varimax",scores = "none")
fact=data.frame(fact_res$loadings[,])

ev <- eigen(cor(df)) # get eigenvalues
ev_res=ev$values

library(jsonlite)
fra_vals=list(factors=fact,eigen_values=ev_res)
fl=basename(args[1])
write_json(x = fra_vals,paste0(substr(fl,1,nchar(fl)-4),"_factor.json"))

