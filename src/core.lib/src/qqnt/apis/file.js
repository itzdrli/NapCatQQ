const _0x5ab8d3=_0x3714;(function(_0x31f957,_0x13ff76){const _0x4c889e=_0x3714,_0x5a1140=_0x31f957();while(!![]){try{const _0x490691=parseInt(_0x4c889e(0x198))/0x1*(-parseInt(_0x4c889e(0x196))/0x2)+parseInt(_0x4c889e(0x172))/0x3+parseInt(_0x4c889e(0x193))/0x4*(parseInt(_0x4c889e(0x178))/0x5)+-parseInt(_0x4c889e(0x18b))/0x6+-parseInt(_0x4c889e(0x195))/0x7*(parseInt(_0x4c889e(0x173))/0x8)+parseInt(_0x4c889e(0x18f))/0x9*(parseInt(_0x4c889e(0x18e))/0xa)+parseInt(_0x4c889e(0x186))/0xb;if(_0x490691===_0x13ff76)break;else _0x5a1140['push'](_0x5a1140['shift']());}catch(_0x4ac547){_0x5a1140['push'](_0x5a1140['shift']());}}}(_0x3507,0xc677b));import{ElementType}from'@/core/qqnt/entities';import _0x5ae5ec from'path';import _0x1fdb1f from'fs';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x4a5d2e from'file-type';import{MsgListener}from'@/core/qqnt/listeners';function _0x3714(_0x55712b,_0x1d41c4){const _0x3507d0=_0x3507();return _0x3714=function(_0x37145c,_0x38557e){_0x37145c=_0x37145c-0x172;let _0x5aaa38=_0x3507d0[_0x37145c];return _0x5aaa38;},_0x3714(_0x55712b,_0x1d41c4);}import _0x3abc57 from'image-size';import{sessionConfig}from'@/core/qqnt/sessionConfig';export class NTQQFileApi{static async['getFileType'](_0x32eaad){const _0x3b674c=_0x3714;return _0x4a5d2e[_0x3b674c(0x17e)](_0x32eaad);}static async[_0x5ab8d3(0x180)](_0x24d441,_0x5741ba){const _0x5a1f92=_0x5ab8d3;await napCatCore['wrapper'][_0x5a1f92(0x174)][_0x5a1f92(0x180)](_0x24d441,_0x5741ba);}static async['getFileSize'](_0x40ab65){const _0x4965f6=_0x5ab8d3;return await napCatCore[_0x4965f6(0x191)]['util']['getFileSize'](_0x40ab65);}static async[_0x5ab8d3(0x182)](_0x4f4791,_0x39cb85=ElementType['PIC'],_0x2265bc=0x0){const _0x35e6c3=_0x5ab8d3,_0x3d1c6e={'pRNzM':function(_0x103eb6,_0x16595d){return _0x103eb6===_0x16595d;}},_0x17c7a1=await calculateFileMD5(_0x4f4791);let _0x80d96a=(await NTQQFileApi[_0x35e6c3(0x175)](_0x4f4791))?.[_0x35e6c3(0x177)]||'';_0x80d96a&&(_0x80d96a='.'+_0x80d96a);let _0x5a07c6=''+_0x5ae5ec['basename'](_0x4f4791);_0x3d1c6e[_0x35e6c3(0x184)](_0x5a07c6[_0x35e6c3(0x190)]('.'),-0x1)&&(_0x5a07c6+=_0x80d96a);const _0x420a96=napCatCore[_0x35e6c3(0x17d)][_0x35e6c3(0x176)]['kernelService']['getRichMediaFilePathForGuild']({'md5HexStr':_0x17c7a1,'fileName':_0x5a07c6,'elementType':_0x39cb85,'elementSubType':_0x2265bc,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi[_0x35e6c3(0x180)](_0x4f4791,_0x420a96);const _0x49d9ef=await NTQQFileApi[_0x35e6c3(0x185)](_0x4f4791);return{'md5':_0x17c7a1,'fileName':_0x5a07c6,'path':_0x420a96,'fileSize':_0x49d9ef,'ext':_0x80d96a};}static async['downloadMedia'](_0x24c006,_0x128fdf,_0x50c5a6,_0x2df2d1,_0x4246ce,_0xc040bd,_0x34a3cf=0x3e8*0x3c*0x2){const _0x82bb6c=_0x5ab8d3,_0x1d13b1={'TEYCG':function(_0x4094de,_0x1f0acd){return _0x4094de===_0x1f0acd;},'GNcRq':function(_0x5d5cff,_0x3eb7d9){return _0x5d5cff(_0x3eb7d9);},'bsIqH':function(_0x538df6,_0x12c7b1,_0x2af6fc){return _0x538df6(_0x12c7b1,_0x2af6fc);}};if(_0xc040bd&&_0x1fdb1f[_0x82bb6c(0x17c)](_0xc040bd))return _0xc040bd;const _0x99a3c9=new MsgListener();return new Promise((_0x58a76b,_0x4ae355)=>{const _0x450666=_0x82bb6c,_0x5d1726={'TptcE':function(_0x37bb3b,_0x62e950){const _0x13cb9c=_0x3714;return _0x1d13b1[_0x13cb9c(0x181)](_0x37bb3b,_0x62e950);},'jNosu':function(_0x4173dc,_0x188506){return _0x1d13b1['GNcRq'](_0x4173dc,_0x188506);},'ptjUJ':'下载超时'};let _0x17861a=![];_0x99a3c9['onRichMediaDownloadComplete']=_0x5b85a1=>{const _0x1ead01=_0x3714;if(_0x5d1726[_0x1ead01(0x194)](_0x5b85a1[_0x1ead01(0x17b)],_0x24c006)){_0x17861a=!![];let _0x2364d7=_0x5b85a1[_0x1ead01(0x197)];if(_0x2364d7[_0x1ead01(0x179)]('\x5c')){const _0xc53e78=sessionConfig?.[_0x1ead01(0x17f)];_0x2364d7=_0x5ae5ec['join'](_0xc53e78,_0x2364d7);}_0x5d1726[_0x1ead01(0x189)](_0x58a76b,_0x2364d7),napCatCore['service'][_0x1ead01(0x176)][_0x1ead01(0x192)]?.[_0x1ead01(0x199)](_0x7cba13);}};const _0x7cba13=napCatCore[_0x450666(0x17d)][_0x450666(0x176)][_0x450666(0x187)](_0x99a3c9);_0x1d13b1[_0x450666(0x18a)](setTimeout,()=>{const _0x2deedf=_0x450666;!_0x17861a&&(_0x5d1726[_0x2deedf(0x189)](_0x4ae355,new Error(_0x5d1726[_0x2deedf(0x183)])),napCatCore[_0x2deedf(0x17d)][_0x2deedf(0x176)]['kernelService']?.[_0x2deedf(0x199)](_0x7cba13));},_0x34a3cf),napCatCore['service'][_0x450666(0x176)][_0x450666(0x192)]?.[_0x450666(0x18d)]({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0x24c006,'chatType':_0x128fdf,'peerUid':_0x50c5a6,'elementId':_0x2df2d1,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x4246ce});});}static async[_0x5ab8d3(0x17a)](_0x3a2d07){const _0x3fafcd={'UotUM':function(_0x3582eb,_0x571ab4){return _0x3582eb(_0x571ab4);},'IAVkp':function(_0x54c1df,_0x31d0d7,_0x1425ce){return _0x54c1df(_0x31d0d7,_0x1425ce);}};return new Promise((_0x557f5b,_0x5a0827)=>{const _0x5c1502=_0x3714;_0x3fafcd[_0x5c1502(0x188)](_0x3abc57,_0x3a2d07,(_0x5b79fa,_0x13c994)=>{const _0xdd7943=_0x5c1502;_0x5b79fa?_0x3fafcd[_0xdd7943(0x18c)](_0x5a0827,_0x5b79fa):_0x3fafcd[_0xdd7943(0x18c)](_0x557f5b,_0x13c994);});});}}function _0x3507(){const _0x4cc13b=['existsSync','service','fileTypeFromFile','defaultFileDownloadPath','copyFile','TEYCG','uploadFile','ptjUJ','pRNzM','getFileSize','33063481WYxwxE','addMsgListener','IAVkp','jNosu','bsIqH','5142084FRxEVf','UotUM','downloadRichMedia','2873550xwPNKw','9PKVGmd','indexOf','wrapper','kernelService','20vhWiWe','TptcE','21sgoaHf','4SqxbLG','filePath','733883LWOFiL','removeKernelMsgListener','308130XbdLvg','2711048aJtqgm','util','getFileType','msg','ext','758510qnVmuM','startsWith','getImageSize','msgId'];_0x3507=function(){return _0x4cc13b;};return _0x3507();}