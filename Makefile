S3CMD ?= s3cmd
PROD_BUCKET=kennedyprizewinners.ctl.columbia.edu
S3_FLAGS ?= --acl-public --delete-removed --no-progress --no-mime-magic --guess-mime-type

deploy-prod:
	$(S3CMD) $(S3_FLAGS) sync ./* s3://$(PROD_BUCKET)/schenkkan/
