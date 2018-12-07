#install.packages("jsonlite")
library(jsonlite)
args <- commandArgs(TRUE)
write_json(x = paste0(args[1]),"sample_test.json")