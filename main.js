function start()
{
navigator.mediaDevices.getUserMedia({audio: true});
clissifier = ml5.soundClassifier('', modolready);
}

function modelready()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error){
        console.error(error);
    }
    console.log(results);
}