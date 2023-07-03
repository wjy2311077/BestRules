/*************************************

脚本功能：好策破解限制
软件版本：3.5.8
脚本作者：BetaCat_HA
更新时间：2023-7-3
使用声明：⚠️仅供学习交流，🈲️禁止非法使用

**************************************

[rewrite_local]
^https?:\/\/adm.haoce.com/api/exam/select/.*?roomId=.* url script-response-body https://github.com/wjy2311077/BestRules/raw/main/Scripts/haoce-crack.js

[mitm]
hostname = adm.haoce.com

*************************************/

var body = $response.body;

// 使用系统自带键盘
body = body.replace(/"keyboard":"([^"]+)"/g, '"keyboard":"systemKeyBoard"');

var obj = JSON.parse(body);

// 承诺书
obj.data.room.config.promise = "1";
obj.data.room.config.promiseNote = '破解脚本已生效，该脚本将会修改软件的功能，包括指定软件使用系统原生键盘、解除软件切屏控制、截屏检测和启用粘贴。仅测试3.5.8版本可用，其它版本可用性未知。请注意：该脚本仅供学习交流，如果您非法使用该脚本，将承担相应的后果。';

// 关闭截屏检测
obj.data.room.config.snapCount = -1;

// 关闭切屏控制
obj.data.room.config.switchScreen = "0";
obj.data.room.config.switchScreenTime = -1;
obj.data.room.config.switchScreenCount = -1;

// 允许粘贴
obj.data.room.config.pasteEnable = "1";

$done({
  body: JSON.stringify(obj),
})
