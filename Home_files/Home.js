// Created by iWeb 3.0.4 local-build-20130104

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.31,offset:1.50}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,398),url:'Home_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Home_files/stroke_1.png'},{rect:new IWRect(1,-1,398,2),url:'Home_files/stroke_2.png'},{rect:new IWRect(399,-1,2,2),url:'Home_files/stroke_3.png'},{rect:new IWRect(399,1,2,398),url:'Home_files/stroke_4.png'},{rect:new IWRect(399,399,2,2),url:'Home_files/stroke_5.png'},{rect:new IWRect(1,399,398,2),url:'Home_files/stroke_6.png'},{rect:new IWRect(-1,399,2,2),url:'Home_files/stroke_7.png'}],new IWSize(400,400))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
