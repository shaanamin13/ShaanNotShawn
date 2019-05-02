import json
import boto3
import zipfile
import io
import mimetypes
from io import BytesIO
def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:720201373078:deployPortfolioTopic')
    
    try:
        s3 = boto3.resource('s3')
        
        portfolio_bucket = s3.Bucket('portfolio.shaannotshawn.com')
        build_bucket = s3.Bucket('portfoliobuild.shaannotshawn.com')
        
        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,
                                                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio Deployed Successfully")
       
    except:
        topic.publish(Subject="Portfoli Deploy Failed", Message="Portfolio was not deployed Successfully")
        raise
    
    return 'Build Successful'