#install.packages("nortest")
library(nortest)
library(outliers)
args <- commandArgs(TRUE)
#args="company_37_11.csv"
df=read.csv(args[1],header = T)
#df=read.csv("http://staging-epes.drupalised.com/uploads/ccompany_50_21.csv",header = T)
input.data=df[,2]
ad_res=ad.test(input.data)
spw_res=shapiro.test(input.data)
#install.packages("jsonlite")
library(jsonlite)
fl=basename(args[1])
p_vals=data.frame(anderson_pval_string=as.character(ad_res$p.value),shapiro_pval_string=as.character(spw_res$p.value),
anderson_pval=round(ad_res$p.value,4),shapiro_pval=round(spw_res$p.value))
write_json(x = p_vals,paste0(substr(fl,1,nchar(fl)-4),"_test.json"))
