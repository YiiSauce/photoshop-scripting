app.preferences.typeUnits=TypeUnits.PIXELS;
app.preferences.rulerUnits=Units.PIXELS;

var doc = app.activeDocument;

if(doc.height<1600){
    var idslct = charIDToTypeID( "slct" );
    var desc30 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref4 = new ActionReference();
    var idcropTool = stringIDToTypeID( "cropTool" );
    ref4.putClass( idcropTool );
    desc30.putReference( idnull, ref4 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc30.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc30.putBoolean( idforceNotify, true );
    executeAction( idslct, desc30, DialogModes.NO );
    
    // =======================================================
    
    var idCrop = charIDToTypeID( "Crop" );
    var desc39 = new ActionDescriptor();
    var idT = charIDToTypeID( "T   " );
    var desc40 = new ActionDescriptor();
    var idTop = charIDToTypeID( "Top " );
    var idRlt = charIDToTypeID( "#Rlt" );
    desc40.putUnitDouble( idTop, idRlt, 0.000000 );
    var idLeft = charIDToTypeID( "Left" );
    var idRlt = charIDToTypeID( "#Rlt" );
    desc40.putUnitDouble( idLeft, idRlt, 0.000000 );
    var idBtom = charIDToTypeID( "Btom" );
    var idRlt = charIDToTypeID( "#Rlt" );
    desc40.putUnitDouble( idBtom, idRlt, 404.134831 );
    var idRght = charIDToTypeID( "Rght" );
    var idRlt = charIDToTypeID( "#Rlt" );
    desc40.putUnitDouble( idRght, idRlt, 460.800000 );
    var idRctn = charIDToTypeID( "Rctn" );
    desc39.putObject( idT, idRctn, desc40 );
    var idAngl = charIDToTypeID( "Angl" );
    var idAng = charIDToTypeID( "#Ang" );
    desc39.putUnitDouble( idAngl, idAng, 0.000000 );
    var idDlt = charIDToTypeID( "Dlt " );
    desc39.putBoolean( idDlt, true );
    var idcropAspectRatioModeKey = stringIDToTypeID( "cropAspectRatioModeKey" );
    var idcropAspectRatioModeClass = stringIDToTypeID( "cropAspectRatioModeClass" );
    var idtargetSize = stringIDToTypeID( "targetSize" );
    desc39.putEnumerated( idcropAspectRatioModeKey, idcropAspectRatioModeClass, idtargetSize );
executeAction( idCrop, desc39, DialogModes.NO );
}