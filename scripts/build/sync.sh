#!/bin/bash
if [ $# -ne 1 ]; then
	echo "Usage: $0 s3-repository-name"
	exit 255
fi
echo "Bucket name: $1"
aws s3 ls s3://$1 &>/dev/null
if [ $? -eq 255 ]; then
	echo "no such bucket error"
	exit 255
fi

echo "Synchronizing Repository ..."
aws s3 sync . s3://$1 --exclude .git/ --delete --dryrun
