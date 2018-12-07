#install.packages("nortest")
library(nortest)
library(outliers)
#install.packages("jsonlite")
library(jsonlite)

args <- commandArgs(TRUE)
#args="company_37_11.csv"
df=read.csv(args[1],header = T)
input.data=df[,2]
out1=outlier(input.data)
input.data=input.data[-which(input.data==out1)]
ad_res=ad.test(input.data)
spw_res=shapiro.test(input.data)

p_vals=data.frame(anderson_pval=ad_res$p.value,shapiro_pval=spw_res$p.value)
fl=basename(args[1])
write_json(x = p_vals,paste0(substr(fl,1,nchar(fl)-4),"_out_test.json"))
