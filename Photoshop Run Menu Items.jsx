// finding menuID

// install ScriptingListener Plugin
// https://helpx.adobe.com/photoshop/kb/downloadable-plugins-and-content.html

// restart PS

// open actions panel
// press record in dummy action
// "Insert Menu Item..."

// open ~/Desktop/ScriptingListenerJS.log
// find the stringIDToTypeID( "Your Action" );

app.preferences.typeUnits=TypeUnits.PIXELS;
app.preferences.rulerUnits=Units.PIXELS;

var i = 0;
while(app.documents.length){
    var doc = app.activeDocument;
    if(doc.height<1599){
       doc.resizeCanvas(doc.width, 1600);
    }
    doc.name="butterfly"+i;
    var idPly = charIDToTypeID( "Ply " );
        var desc80 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref23 = new ActionReference();
            var idActn = charIDToTypeID( "Actn" );
            ref23.putName( idActn, "Action 3" );
            var idASet = charIDToTypeID( "ASet" );
            ref23.putName( idASet, "redbubble" );
        desc80.putReference( idnull, ref23 );
    app.executeAction( idPly, desc80, DialogModes.NO );
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    i++;
}



// var idbrowseScripts = stringIDToTypeID( "browseScripts" );

// app.runMenuItem(idbrowseScripts);
