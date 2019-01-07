//Replaces text of the webpage

'use strict'

replaceInterro(document.body);

function replaceInterro(node){
    for(var i = 0; i < node.childNodes.length; i++){
        if(node.childNodes[i].nodeType == Node.TEXT_NODE){
            var oldNode = node.childNodes[i];
            var newNode = document.createTextNode(oldNode.nodeValue.replace(/[!?]*(\?!|!\?)+([!?])*/g , '‽'));
            node.replaceChild(newNode, oldNode);
        }
        else replaceInterro(node.childNodes[i]);
    }
}


