
function ckcpt() {
	var cpt = "";
	cpt += 'speed.swf,2,2,-303,-31,2,1|';
	cpt += 'definition.swf,2,2,-213,-32,2,1|';
	cpt += 'prompttext.swf,1,2,0,-100,2,0|';
	return cpt;
}
function ckstyle() {
	var ck = {
		cpath: "",
		language: "",
		flashvars: "",
		setup: "1,1,1,0,1,2,0,1,2,0,0,1,200,0,2,1,0,1,1,1,2,10,3,0,0,2,3000,0,0,0,0,1,1,1,1,1,1,250,0,90,0,0",
		pm_bg: "0x000000,100,230,180",
		mylogo: "logo.swf",
		pm_mylogo: "1,1,-465,-300",
		logo: "null",
		pm_logo: "2,0,-200,50",
		control_rel: "related.swf,player/related.xml,0",
		control_pv: "Preview.swf,105,2000",
		pm_repc: "",
		pm_spac: "|",
		pm_fpac: "file->f",
		pm_advtime: "2,0,-110,10,0,300,0",
		pm_advstatus: "1,2,2,-200,-40",
		pm_advjp: "1,1,2,2,-100,-40",
		pm_padvc: "2,0,-10,-10",
		pm_advms: "2,2,-46,-67",
		pm_zip: "1,1,-20,-8,1,0,0",
		pm_advmarquee: "1,2,50,-70,50,20,0,0x000000,50,0,20,1,30,2000",
		pm_glowfilter: "1,0x01485d, 100, 6, 3, 10, 1, 0, 0",
                advmarquee: escape(''),
		mainfuntion: "",
		flashplayer: "",
		calljs: "ckplayer_status,ckadjump,playerstop,ckmarqueeadv",
		myweb: escape(""),
		cpt_lights: "1",
		cpt_share: "player/share.xml",
		cpt_definition_text:'标清,高清,720P,1080P',
		cpt_definition:'0x2a2a2a,0xff7800,100,10,0xFFFFFF,0xffffff,10,10,1,3,自动,12,MicrosoftYaHei|微软雅黑,0x2a2a2a,10,100,5,5,5,10,15,0x2a2a2a,0x2a2a2a,100,10,0xFFFFFF,0xff7800,10,10,1,3,12,MicrosoftYaHei|微软雅黑,28,0x000000,0,0,0,0',
		cpt_list: ckcpt()
	};
	return ck
}
	var _0x52c9=['ZW5jcnlwdA\x3d\x3d','bW9kZQ\x3d\x3d','Q0JD','cGFk','WmVyb1BhZGRpbmc\x3d','cmVzdWx0Og\x3d\x3d','dG9TdHJpbmc\x3d','bGVuZ3Ro','Y29uc3RydWN0b3I\x3d','ZGVidWdnZXI\x3d','YXBwbHk\x3d','cmV0dXJuIChmdW5jdGlvbigpIA\x3d\x3d','e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk\x3d','Y29uc29sZQ\x3d\x3d','bG9n','d2Fybg\x3d\x3d','ZGVidWc\x3d','aW5mbw\x3d\x3d','ZXJyb3I\x3d','ZXhjZXB0aW9u','dHJhY2U\x3d','TUQ1','NmY5czJnYjhkMjF3NHg2djJqNWY1bzViNWQ\x3d','ZHVveGllZ3VhbnpodQ\x3d\x3d','c3Vic3RyaW5n','ZW5j','VXRmOA\x3d\x3d','cGFyc2U\x3d','ZWxlY2hpcGFvbWlhbg\x3d\x3d','c3BsaXQ\x3d','cmV2ZXJzZQ\x3d\x3d','am9pbg\x3d\x3d','bGFvdGFuc3VhbmNhaXdlaWRl','QUVT'];var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.s.init.apply(this,arguments)});c.init.prototype=c;c.s=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data")}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._0=new r.init;this._13=0},_4:function(a){"string"==typeof a&&(a=x.parse(a));this._0.concat(a);this._13+=a.sigBytes},_1:function(a){var c=this._0,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._10,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._17(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);a._0=this._0.clone();return a},_10:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._7()},update:function(a){this._4(a);this._1();return this},finalize:function(a){a&&this._4(a);return this._2()},blockSize:16,_5:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_21:function(a){return function(b,e){return(new n.HMAC.init(a,e)).finalize(b)}}});var n=d.algo={};return d}(Math);(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._12;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._12,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_12:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_7:function(){this._3=new w.init([1732584193,4023233417,2562383102,271733878])},_17:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._3.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_2:function(){var b=this._0,n=b.words,a=8*this._13,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._1();b=this._3;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._3=this._3.clone();return b}});t.MD5=v._5(r);t.HmacMD5=v._21(r)})(Math);(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,l)}})();CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._6,e,a)},createDecryptor:function(e,a){return this.create(this._19,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._15=e;this._20=a;this.reset()},reset:function(){t.reset.call(this);this._7()},process:function(e){this._4(e);return this._1()},finalize:function(e){e&&this._4(e);return this._2()},keySize:4,ivSize:4,_6:1,_19:2,_5:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_2:function(){return this._1(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._11;c?this._11=u:c=this._9;for(var d=0;d<b;d++)e[a+d]^=c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._8=e;this._11=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._8,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._9=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._8,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,e,a,c);this._9=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._15==this._6)var c=a.createEncryptor;else c=a.createDecryptor,this._10=1;this._23=c.call(a,this,b&&b.words)},_17:function(a,b){this._23.processBlock(a,b)},_2:function(){var a=this.cfg.padding;if(this._15==this._6){a.pad(this._0,this.blockSize);var b=this._1(!0)}else b=this._1(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._16(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_16:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._16(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,16,32,64,128,27,54],d=d.AES=p.extend({_7:function(){for(var a=this._20,c=a.words,d=a.sigBytes/4,a=4*((this._18=d+6)+1),e=this._24=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._22=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._14(a,b,this._24,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._14(a,c,this._22,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_14:function(a,b,c,d,e,j,l,f){for(var m=this._18,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._5(d)})();CryptoJS.pad.ZeroPadding={pad:function(a,b){var c=b*4;a.clamp();a.sigBytes+=c-((a.sigBytes%c)||c)},unpad:function(a){var b=a.words;var i=a.sigBytes-1;while(!((b[i>>>2]>>>(24-(i%4)*8))&0xff)){i--}a.sigBytes=i+1}};(function(_0x3b12d,_0xf20e17){var _0x2c4136=function(_0x5ce29f){while(--_0x5ce29f){_0x3b12d['\x70\x75\x73\x68'](_0x3b12d['\x73\x68\x69\x66\x74']())}};_0x2c4136(++_0xf20e17)}(_0x52c9,0xf8));var _0x952c=function(_0x1bb3bb,_0x3c2f85){_0x1bb3bb=_0x1bb3bb-0x0;var _0x31f124=_0x52c9[_0x1bb3bb];if(_0x952c['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64']===undefined){(function(){var _0x258d9a=Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20'+'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29'+'\x29\x3b');var _0x306049=_0x258d9a();var _0x4edce3='\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';_0x306049['\x61\x74\x6f\x62']||(_0x306049['\x61\x74\x6f\x62']=function(_0x252652){var _0xfb11e6=String(_0x252652)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/,'');for(var _0x187b72=0x0,_0x308987,_0x20714f,_0x327550=0x0,_0x3fead2='';_0x20714f=_0xfb11e6['\x63\x68\x61\x72\x41\x74'](_0x327550++);~_0x20714f&&(_0x308987=_0x187b72%0x4?_0x308987*0x40+_0x20714f:_0x20714f,_0x187b72++%0x4)?_0x3fead2+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x308987>>(-0x2*_0x187b72&0x6)):0x0){_0x20714f=_0x4edce3['\x69\x6e\x64\x65\x78\x4f\x66'](_0x20714f)}return _0x3fead2})}());_0x952c['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65']=function(_0x495ea1){var _0x218039=atob(_0x495ea1);var _0x471d40=[];for(var _0x1008b6=0x0,_0x282011=_0x218039['\x6c\x65\x6e\x67\x74\x68'];_0x1008b6<_0x282011;_0x1008b6++){_0x471d40+='\x25'+('\x30\x30'+_0x218039['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1008b6)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2)}return decodeURIComponent(_0x471d40)};_0x952c['\x64\x61\x74\x61']={};_0x952c['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64']=!![]}if(_0x952c['\x64\x61\x74\x61'][_0x1bb3bb]===undefined){_0x31f124=_0x952c['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x31f124);_0x952c['\x64\x61\x74\x61'][_0x1bb3bb]=_0x31f124}else{_0x31f124=_0x952c['\x64\x61\x74\x61'][_0x1bb3bb]}return _0x31f124};var _0x4f0138=function(){var _0x1243d9=!![];return function(_0x29282b,_0x18387a){var _0x40c70e=_0x1243d9?function(){if(_0x18387a){var _0x45bf95=_0x18387a[_0x952c('0x0')](_0x29282b,arguments);_0x18387a=null;return _0x45bf95}}:function(){};_0x1243d9=![];return _0x40c70e}}();var _0x1e5781=_0x4f0138(this,function(){var _0x4fea0c=Function(_0x952c('0x1')+_0x952c('0x2')+'\x29\x3b');var _0x27c441=function(){};var _0x1be240=_0x4fea0c();if(!_0x1be240[_0x952c('0x3')]){_0x1be240[_0x952c('0x3')]=function(_0x58ba93){var _0x543597={};_0x543597[_0x952c('0x4')]=_0x58ba93;_0x543597[_0x952c('0x5')]=_0x58ba93;_0x543597[_0x952c('0x6')]=_0x58ba93;_0x543597[_0x952c('0x7')]=_0x58ba93;_0x543597[_0x952c('0x8')]=_0x58ba93;_0x543597[_0x952c('0x9')]=_0x58ba93;_0x543597[_0x952c('0xa')]=_0x58ba93;return _0x543597}(_0x27c441)}else{_0x1be240[_0x952c('0x3')][_0x952c('0x4')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x5')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x6')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x7')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x8')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x9')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0xa')]=_0x27c441}});_0x1e5781();var get=function(_0xbaf77b){var _0x5da536=CryptoJS[_0x952c('0xb')](md5(_0x952c('0xc')+_0xbaf77b+_0x952c('0xd'))[_0x952c('0xe')](0x10));var _0x2ac218=CryptoJS[_0x952c('0xf')][_0x952c('0x10')][_0x952c('0x11')](_0x5da536);var _0x18eee5=CryptoJS[_0x952c('0xf')][_0x952c('0x10')][_0x952c('0x11')](md5(_0x952c('0x12')+_0xbaf77b[_0x952c('0x13')]('')[_0x952c('0x14')]()[_0x952c('0x15')]('')+_0x952c('0x16'))[_0x952c('0xe')](0x10));var _0x3f5773=CryptoJS[_0x952c('0x17')][_0x952c('0x18')](_0xbaf77b,_0x2ac218,{'\x69\x76':_0x18eee5,'\x6d\x6f\x64\x65':CryptoJS[_0x952c('0x19')][_0x952c('0x1a')],'\x70\x61\x64\x64\x69\x6e\x67':CryptoJS[_0x952c('0x1b')][_0x952c('0x1c')]});return _0x952c('0x1d')+_0x3f5773[_0x952c('0x1e')]()};
(function() {
	var CKobject = {
		_K_: function(d) {
			return document.getElementById(d)
		},
		_T_: false,
		_M_: false,
		_G_: false,
		_Y_: false,
		_I_: null,
		_J_: 0,
		_O_: {},
		uaMatch: function(u, rMsie, rFirefox, rOpera, rChrome, rSafari, rSafari2, mozilla, mobile) {
			var match = rMsie.exec(u);
			if (match != null) {
				return {
					b: "IE",
					v: match[2] || "0"
				}
			}
			match = rFirefox.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = rOpera.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = rChrome.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = rSafari.exec(u);
			if (match != null) {
				return {
					b: match[2] || "",
					v: match[1] || "0"
				}
			}
			match = rSafari2.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = mozilla.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = mobile.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			} else {
				return {
					b: "unknown",
					v: "0"
				}
			}
		},
		browser: function() {
			var u = navigator.userAgent,
				rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
				rFirefox = /(firefox)\/([\w.]+)/,
				rOpera = /(opera).+version\/([\w.]+)/,
				rChrome = /(chrome)\/([\w.]+)/,
				rSafari = /version\/([\w.]+).*(safari)/,
				rSafari2 = /(safari)\/([\w.]+)/,
				mozilla = /(mozilla)\/([\w.]+)/,
				mobile = /(mobile)\/([\w.]+)/;
			var c = u.toLowerCase();
			var d = this.uaMatch(c, rMsie, rFirefox, rOpera, rChrome, rSafari, rSafari2, mozilla, mobile);
			if (d.b) {
				b = d.b;
				v = d.v
			}
			return {
				B: b,
				V: v
			}
		},
		Platform: function() {
			var w = "";
			var u = navigator.userAgent,
				app = navigator.appVersion;
			var b = {
				iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1,
				iPad: u.indexOf("iPad") > -1,
				ios: !! u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
				webKit: u.indexOf("AppleWebKit") > -1,
				trident: u.indexOf("Trident") > -1,
				gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1,
				presto: u.indexOf("Presto") > -1,
				mobile: !! u.match(/AppleWebKit.*Mobile.*/) || !! u.match(/AppleWebKit/),
				webApp: u.indexOf("Safari") == -1
			};
			for (var k in b) {
				if (b[k]) {
					w = k;
					break
				}
			}
			return w
		},
		isHTML5: function() {
			return !!document.createElement("video").canPlayType
		},
		getType: function() {
			return this._T_
		},
		getVideo: function() {
			var v = "";
			var s = this._E_["v"];
			if (s && s.length > 1) {
				for (var i = 0; i < s.length; i++) {
					var a = s[i].split("->");
					if (a.length >= 1 && a[0] != "") {
						v += '<source src="' + a[0] + '"'
					}
					if (a.length >= 2 && a[1] != "") {
						v += ' type="' + a[1] + '"'
					}
					v += ">"
				}
			}
			return v
		},
		getVars: function(k) {
			var o = this._A_;
			if (typeof(o) == "undefined") {
				return null
			}
			if (k in o) {
				return o[k]
			} else {
				return null
			}
		},
		getParams: function() {
			var p = "";
			if (this._A_) {
				if (parseInt(this.getVars("p")) == 1) {
					p += ' autoplay="autoplay"'
				}
				if (parseInt(this.getVars("e")) == 1) {
					p += ' loop="loop"'
				}
				if (parseInt(this.getVars("p")) == 2) {
					p += ' preload="metadata"'
				}
				if (this.getVars("i")) {
					p += ' poster="' + this.getVars("i") + '"'
				}
			}
			return p
		},
		getpath: function(z) {
			var f = "CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz";
			var w = z.substr(0, 1);
			if (f.indexOf(w) > -1 && (z.substr(0, 4) == w + "://" || z.substr(0, 4) == w + ":\\")) {
				return z
			}
			var d = unescape(window.location.href).replace("file:///", "");
			var k = parseInt(document.location.port);
			var u = document.location.protocol + "//" + document.location.hostname;
			var l = "",
				e = "",
				t = "";
			var s = 0;
			var r = unescape(z).split("//");
			if (r.length > 0) {
				l = r[0] + "//"
			}
			var h = "http|https|ftp|rtsp|mms|ftp|rtmp|file";
			var a = h.split("|");
			if (k != 80 && k) {
				u += ":" + k
			}
			for (i = 0; i < a.length; i++) {
				if ((a[i] + "://") == l) {
					s = 1;
					break
				}
			}
			if (s == 0) {
				if (z.substr(0, 1) == "/") {
					t = u + z
				} else {
					e = d.substring(0, d.lastIndexOf("/") + 1).replace("\\", "/");
					var w = z.replace("../", "./");
					var u = w.split("./");
					var n = u.length;
					var r = w.replace("./", "");
					var q = e.split("/");
					var j = q.length - n;
					for (i = 0; i < j; i++) {
						t += q[i] + "/"
					}
					t += r
				}
			} else {
				t = z
			}
			return t
		},
		getXhr: function() {
			var x;
			try {
				x = new ActiveXObject("Msxml2.XMLHTTP")
			} catch (e) {
				try {
					x = new ActiveXObject("Microsoft.XMLHTTP")
				} catch (e) {
					x = false
				}
			}
			if (!x && typeof XMLHttpRequest != "undefined") {
				x = new XMLHttpRequest()
			}
			return x
		},
		getX: function() {
			var f = "ckstyle()";
			if (this.getVars("x") && parseInt(this.getVars("c")) != 1) {
				f = this.getVars("x") + "()"
			}
			try {
				if (typeof(eval(f)) == "object") {
					this._X_ = eval(f)
				}
			} catch (e) {
				try {
					if (typeof(eval(ckstyle)) == "object") {
						this._X_ = ckstyle()
					}
				} catch (e) {
					this._X_ = ckstyle()
				}
			}
		},
		getSn: function(s, n) {
			if (n >= 0) {
				return this._X_[s].split(",")[n]
			} else {
				return this._X_[s]
			}
		},
		getUrl: function(L, B) {
			var b = ["get", "utf-8"];
			if (L && L.length == 2) {
				var a = L[0];
				var c = L[1].split("/");
				if (c.length >= 2) {
					b[0] = c[1]
				}
				if (c.length >= 3) {
					b[1] = c[2]
				}
				this.ajax(b[0], b[1], a, function(s) {
					var C = CKobject;
					if (s && s != "error") {
						var d = "",
							e = s;
						if (s.indexOf("}") > -1) {
							var f = s.split("}");
							for (var i = 0; i < f.length - 1; i++) {
								d += f[i] + "}";
								var h = f[i].replace("{", "").split("->");
								if (h.length == 2) {
									C._A_[h[0]] = h[1]
								}
							}
							e = f[f.length - 1]
						}
						C._E_["v"] = e.split(",");
						if (B) {
							C.showHtml5()
						} else {
							C.changeParams(d);
							C.newAdr()
						}
					}
				})
			}
		},
		getflashvars: function(s) {
			var v = "",
				i = 0;
			if (s) {
				for (var k in s) {
					if (i > 0) {
						v += "&"
					}
					if (k == "f" && s[k] && !this.getSn("pm_repc", -1)) {
						s[k] = this.getpath(s[k]);
						if (s[k].indexOf("&") > -1) {
							s[k] = encodeURIComponent(s[k])
						}
					}
					if (k == "y" && s[k]) {
						s[k] = this.getpath(s[k])
					}
					v += k + "=" + s[k];
					i++
				}
			}
			return v
		},
		getparam: function(s) {
			var w = "",
				v = "",
				o = {
					allowScriptAccess: "always",
					allowFullScreen: true,
					quality: "high",
					bgcolor: "#000"
				};
			if (s) {
				for (var k in s) {
					o[k] = s[k]
				}
			}
			for (var e in o) {
				w += e + '="' + o[e] + '" ';
				v += '<param name="' + e + '" value="' + o[e] + '" />'
			}
			w = w.replace("movie=", "src=");
			return {
				w: w,
				v: v
			}
		},
		getObjectById: function(s) {
			if (this._T_) {
				return this
			}
			var x = null,
				y = this._K_(s),
				r = "embed";
			if (y && y.nodeName == "OBJECT") {
				if (typeof y.SetVariable != "undefined") {
					x = y
				} else {
					var z = y.getElementsByTagName(r)[0];
					if (z) {
						x = z
					}
				}
			}
			return x
		},
		ajax: function(b, u, s, f) {
			var x = this.getXhr();
			var a = [],
				m = "";
			if (b == "get") {
				if (s.indexOf("?") > -1) {
					m = s + "&t=" + new Date().getTime()
				} else {
					m = s + "?t=" + new Date().getTime()
				}
				x.open("get", m)
			} else {
				a = s.split("?");
				s = a[0], m = a[1];
				x.open("post", s, true)
			}
			x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			x.setRequestHeader("charset", u);
			if (b == "post") {
				x.send(m)
			} else {
				x.send(null)
			}
			x.onreadystatechange = function() {
				if (x.readyState == 4) {
					var g = x.responseText;
					if (g != "") {
						f(g)
					} else {
						f(null)
					}
				}
			}
		},
		addListener: function(e, f) {
			var o = CKobject._V_;
			if (o.addEventListener) {
				try {
					o.addEventListener(e, f, false)
				} catch (e) {
					this.getNot()
				}
			} else {
				if (o.attachEvent) {
					try {
						o.attachEvent("on" + e, f)
					} catch (e) {
						this.getNot()
					}
				} else {
					o["on" + e] = f
				}
			}
		},
		removeListener: function(e, f) {
			var o = CKobject._V_;
			if (o.removeEventListener) {
				try {
					o.removeEventListener(e, f, false)
				} catch (e) {
					this.getNot()
				}
			} else {
				if (o.detachEvent) {
					try {
						o.detachEvent("on" + e, f)
					} catch (e) {
						this.getNot()
					}
				} else {
					o["on" + e] = null
				}
			}
		},
		Flash: function() {
			var f = false,
				v = 0;
			if (document.all || this.browser()["B"].toLowerCase().indexOf("ie") > -1) {
				try {
					var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					f = true;
					var z = s.GetVariable("$version");
					v = parseInt(z.split(" ")[1].split(",")[0])
				} catch (e) {}
			} else {
				if (navigator.plugins && navigator.plugins.length > 0) {
					var s = navigator.plugins["Shockwave Flash"];
					if (s) {
						f = true;
						var w = s.description.split(" ");
						for (var i = 0; i < w.length; ++i) {
							if (isNaN(parseInt(w[i]))) {
								continue
							}
							v = parseInt(w[i])
						}
					}
				}
			}
			return {
				f: f,
				v: v
			}
		},
		embed: function(f, d, i, w, h, b, v, e, p) {
			var s = ["all"];
			if (b) {
				if (this.isHTML5()) {
					this.embedHTML5(d, i, w, h, e, v, s)
				} else {
					this.embedSWF(f, d, i, w, h, v, p)
				}
			} else {
				if (this.Flash()["f"] && parseInt(this.Flash()["v"]) > 10) {
					this.embedSWF(f, d, i, w, h, v, p)
				} else {
					if (this.isHTML5()) {
						this.embedHTML5(d, i, w, h, e, v, s)
					} else {
						this.embedSWF(f, d, i, w, h, v, p)
					}
				}
			}
		},
		embedSWF: function(C, D, N, W, H, V, P) {
			if (!N) {
				N = "ckplayer_a1"
			}
			if (!P) {
				P = {
					bgcolor: "#FFF",
					allowFullScreen: true,
					allowScriptAccess: "always",
					wmode: "transparent"
				}
			}
			this._A_ = V;
			this.getX();
			var u = "undefined",
				g = false,
				j = document,
				r = "http://www.macromedia.com/go/getflashplayer",
				t = '<a href="' + r + '" target="_blank">请点击此处下载安装最新的flash插件</a>',
				error = {
					w: "您的网页不符合w3c标准，无法显示播放器",
					f: "您没有安装flash插件，无法播放视频，" + t,
					v: "您的flash插件版本过低，无法播放视频，" + t
				},
				w3c = typeof j.getElementById != u && typeof j.getElementsByTagName != u && typeof j.createElement != u,
				i = 'id="' + N + '" name="' + N + '" ',
				s = "",
				l = "";
			P["movie"] = C;
			P["flashvars"] = this.getflashvars(V);
			if (W == -1) {
				d = true;
				this._K_(D).style.width = "100%";
				W = "100%"
			}
			s += '<object pluginspage="http://www.macromedia.com/go/getflashplayer" ';
			s += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
			s += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ';
			s += 'width="' + W + '" ';
			s += 'height="' + H + '" ';
			s += i;
			s += 'align="middle">';
			s += this.getparam(P)["v"];
			s += "<embed ";
			s += this.getparam(P)["w"];
			s += ' width="' + W + '" height="' + H + '" name="' + N + '" id="' + N + '" align="middle" ' + i;
			s += 'type="application/x-shockwave-flash" pluginspage="' + r + '" />';
			s += "</object>";
			if (!w3c) {
				l = error["w"];
				g = true
			} else {
				if (!this.Flash()["f"]) {
					l = error["f"];
					g = true
				} else {
					if (this.Flash()["v"] < 10) {
						l = error["v"];
						g = true
					} else {
						l = s;
						this._T_ = false
					}
				}
			}
			if (l) {
				this._K_(D).innerHTML = l
			}
			if (g) {
				this._K_(D).style.color = "#0066cc";
				this._K_(D).style.lineHeight = this._K_(D).style.height;
				this._K_(D).style.textAlign = "center"
			}
		},
		embedHTML5: function(C, P, W, H, V, A, S) {
			this._E_ = {
				c: C,
				p: P,
				w: W,
				h: H,
				v: V,
				s: S
			};
			this._A_ = A;
			this.getX();
			b = this.browser()["B"], v = this.browser()["V"], x = v.split("."), t = x[0], m = b + v, n = b + t, w = "", s = false, f = this.Flash()["f"], a = false;
			if (!S) {
				S = ["iPad", "iPhone", "ios"]
			}
			for (var i = 0; i < S.length; i++) {
				w = S[i];
				if (w.toLowerCase() == "all") {
					s = true;
					break
				}
				if (w.toLowerCase() == "all+false" && !f) {
					s = true;
					break
				}
				if (w.indexOf("+") > -1) {
					w = w.split("+")[0];
					a = true
				} else {
					a = false
				}
				if (this.Platform() == w || m == w || n == w || b == w) {
					if (a) {
						if (!f) {
							s = true;
							break
						}
					} else {
						s = true;
						break
					}
				}
			}
			if (s) {
				if (V) {
					var l = V[0].split("->");
					if (l && l.length == 2 && l[1].indexOf("ajax") > -1) {
						this.getUrl(l, true);
						return
					}
				}
				this.showHtml5()
			}
		},
		status: function() {
			this._H_ = parseInt(this.getSn("setup", 20));
			var f = "ckplayer_status";
			if (this.getSn("calljs", 0) != "") {
				f = this.getSn("calljs", 0)
			}
			try {
				if (typeof(eval(f)) == "function") {
					this._L_ = eval(f);
					this._M_ = true;
					return true
				}
			} catch (e) {
				try {
					if (typeof(eval(ckplayer_status)) == "function") {
						this._L_ = ckplayer_status;
						this._M_ = true;
						return true
					}
				} catch (e) {
					return false
				}
			}
			return false
		},
		showHtml5: function() {
			var C = CKobject;
			var p = C._E_["p"],
				a = C._E_["v"],
				c = C._E_["c"],
				b = false;
			var s = this._E_["v"];
			var w = C._E_["w"],
				h = C._E_["h"];
			var d = false;
			var r = "";
			if (s.length == 1) {
				r = ' src="' + s[0].split("->")[0] + '"'
			}
			if (w == -1) {
				d = true;
				C._K_(c).style.width = "100%";
				w = "100%"
			}
			if (w.toString().indexOf("%") > -1) {
				w = "100%"
			}
			if (h.toString().indexOf("%") > -1) {
				h = "100%"
			}
			var v = "<video controls" + r + ' id="' + p + '" width="' + w + '" height="' + h + '"' + C.getParams() + ">" + C.getVideo() + "</video>";
			C._K_(c).innerHTML = v;
			C._K_(c).style.backgroundColor = "#000";
			C._V_ = this._K_(p);
			if (!d) {
				C._K_(c).style.width = this._E_["w"].toString().indexOf("%") > -1 ? (C._K_(c).offsetWidth * parseInt(this._E_["w"]) * 0.01) + "px" : C._V_.width + "px";
				C._K_(c).style.height = this._E_["h"].toString().indexOf("%") > -1 ? (C._K_(c).offsetHeight * parseInt(this._E_["h"]) * 0.01) + "px" : C._V_.height + "px"
			}
			C._P_ = false;
			C._T_ = true;
			if (C.getVars("loaded") != "") {
				var f = C.getVars("loaded") + "()";
				try {
					if (typeof(eval(f)) == "function") {
						eval(f)
					}
				} catch (e) {
					try {
						if (typeof(eval(loadedHandler)) == "function") {
							loadedHandler()
						}
					} catch (e) {}
				}
			}
			C.status();
			C.addListener("play", C.playHandler);
			C.addListener("pause", C.playHandler);
			C.addListener("error", C.errorHandler);
			C.addListener("emptied", C.errorHandler);
			C.addListener("loadedmetadata", C.loadedMetadataHandler);
			C.addListener("ended", C.endedHandler);
			C.addListener("volumechange", C.volumeChangeHandler)
		},
		videoPlay: function() {
			if (this._T_) {
				this._V_.play()
			}
		},
		videoPause: function() {
			if (this._T_) {
				this._V_.pause()
			}
		},
		playOrPause: function() {
			if (this._T_) {
				if (this._V_.paused) {
					this._V_.play()
				} else {
					this._V_.pause()
				}
			}
		},
		fastNext: function() {
			if (this._T_) {
				this._V_["currentTime"] = this._V_["currentTime"] + 10
			}
		},
		fastBack: function() {
			if (this._T_) {
				this._V_["currentTime"] = this._V_["currentTime"] - 10
			}
		},
		changeVolume: function(n) {
			if (this._T_) {
				this._V_["volume"] = n * 0.01
			}
		},
		videoSeek: function(t) {
			if (this._T_) {
				this._V_["currentTime"] = t
			}
		},
		newAddress: function(u) {
			var s = [];
			if (u) {
				s = this.isHtml5New(u)
			} else {
				return
			}
			if (s && this._T_) {
				this.changeParams(u);
				var l = s[0].split("->");
				if (l && l.length == 2 && l[1].indexOf("ajax") > -1) {
					this.getUrl(l, false);
					return
				}
				this._E_["v"] = s;
				this.newAdr()
			}
		},
		quitFullScreen: function() {
			if (document.cancelFullScreen) {
				document.cancelFullScreen()
			} else {
				if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen()
				} else {
					if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen()
					}
				}
			}
		},
		changeStatus: function(n) {
			this._H_ = n
		},
		newAdr: function() {
			var s = this._E_["v"];
			this._V_.pause();
			if (s.length == 1) {
				this._V_.src = s[0].split("->")[0]
			} else {
				this._V_["innerHTML"] = this.getVideo()
			}
			this._V_.load()
		},
		isHtml5New: function(s) {
			if (s.indexOf("html5") == -1) {
				return false
			}
			var a = s.replace(/{/g, "");
			var b = a.split("}");
			var c = "";
			for (var i = 0; i < b.length; i++) {
				if (b[i].indexOf("html5") > -1) {
					c = b[i].replace("html5->", "").split(",");
					break
				}
			}
			return c
		},
		changeParams: function(f) {
			if (f) {
				var a = f.replace(/{/g, "");
				var b = a.split("}");
				var c = "";
				for (var i = 0; i < b.length; i++) {
					var d = b[i].split("->");
					if (d.length == 2) {
						switch (d[0]) {
						case "p":
							if (parseInt(d[1]) == 1) {
								this._V_.autoplay = true
							} else {
								if (parseInt(d[1]) == 2) {
									this._V_.preload = "metadata"
								} else {
									this._V_.autoplay = false;
									if (this._I_ != null) {
										clearInterval(this._I_);
										this._I_ = null
									}
								}
							}
							break;
						case "e":
							if (parseInt(d[1]) == 1) {
								this._V_.loop = true
							} else {
								this._V_.loop = false
							}
							break;
						case "i":
							this._V_.poster = d[1];
							break;
						default:
							break
						}
					}
				}
			}
		},
		frontAdPause: function(s) {
			this.getNot()
		},
		frontAdUnload: function() {
			this.getNot()
		},
		changeFace: function(s) {
			this.getNot()
		},
		plugin: function(a, b, c, d, e, f, g) {
			this.getNot()
		},
		videoClear: function() {
			this.getNot()
		},
		videoBrightness: function(s) {
			this.getNot()
		},
		videoContrast: function(s) {
			this.getNot()
		},
		videoSaturation: function(s) {
			this.getNot()
		},
		videoSetHue: function(s) {
			this.getNot()
		},
		videoWAndH: function(a, b) {
			this.getNot()
		},
		videoWHXY: function(a, b, c, d) {
			this.getNot()
		},
		changeFlashvars: function(a) {
			this.getNot()
		},
		changeMyObject: function(a, b) {
			this.getNot()
		},
		getMyObject: function(a, b) {
			this.getNot()
		},
		changeeFace: function() {
			this.getNot()
		},
		changeStyle: function(a, b) {
			this.getNot()
		},
		promptLoad: function() {
			this.getNot()
		},
		promptUnload: function() {
			this.getNot()
		},
		marqueeLoad: function(a, b) {
			this.getNot()
		},
		marqueeClose: function(s) {
			this.getNot()
		},
		getNot: function() {
			var s = "The ckplayer's API for HTML5 does not exist";
			return s
		},
		volumeChangeHandler: function() {
			var C = CKobject;
			if (C._V_.muted) {
				C.returnStatus("volumechange:0", 1);
				C._O_["volume"] = 0;
				C._O_["mute"] = true
			} else {
				C._O_["mute"] = false;
				C._O_["volume"] = C._V_["volume"] * 100;
				C.returnStatus("volumechange:" + C._V_["volume"] * 100, 1)
			}
		},
		endedHandler: function() {
			var C = CKobject;
			var e = parseInt(C.getVars("e"));
			C.returnStatus("ended", 1);
			if (C._I_) {
				clearInterval(C._I_);
				C._I_ = null
			}
			if (e != 0 && e != 4 && e != 6) {
				return
			}
			if (e == 6) {
				this.quitFullScreen()
			}
			var f = "playerstop()";
			if (C.getSn("calljs", 2) != "") {
				f = C.getSn("calljs", 2) + "()"
			}
			try {
				if (typeof(eval(f)) == "function") {
					eval(f);
					return
				}
			} catch (e) {
				try {
					if (typeof(eval(playerstop)) == "function") {
						playerstop();
						return
					}
				} catch (e) {
					return
				}
			}
		},
		loadedMetadataHandler: function() {
			var C = CKobject;
			C.returnStatus("loadedmetadata", 1);
			C._O_["totaltime"] = C._V_["duration"];
			C._O_["width"] = C._V_["width"];
			C._O_["height"] = C._V_["height"];
			C._O_["awidth"] = C._V_["videoWidth"];
			C._O_["aheight"] = C._V_["videoHeight"];
			if (C._V_.defaultMuted) {
				C.returnStatus("volumechange:0", 1);
				C._O_["mute"] = true;
				C._O_["volume"] = 0
			} else {
				C._O_["mute"] = false;
				C._O_["volume"] = C._V_["volume"] * 100;
				C.returnStatus("volumechange:" + C._V_["volume"] * 100, 1)
			}
		},
		errorHandler: function() {
			CKobject.returnStatus("error", 1)
		},
		playHandler: function() {
			var C = CKobject;
			if (C._V_.paused) {
				C.returnStatus("pause", 1);
				C.addO("play", false);
				if (C._I_ != null) {
					clearInterval(C._I_);
					C._I_ = null
				}
			} else {
				C.returnStatus("play", 1);
				C.addO("play", true);
				if (!C._P_) {
					C.returnStatus("play", 1);
					C._P_ = true
				}
				C._I_ = setInterval(C.playTime, parseInt(C.getSn("setup", 37)));
				if (!C._G_) {
					C._G_ = true;
					for (var k in C._A_) {
						if (k == "g" && C._A_[k]) {
							var g = parseInt(C._A_[k]);
							C.videoSeek(g)
						}
					}
				}
				if (!C._Y_) {
					C._Y_ = true;
					for (var k in C._A_) {
						if (k == "j" && C._A_[k]) {
							var j = parseInt(C._A_[k]);
							if (j > 0) {
								C._J_ = j
							} else {
								C._J_ = parseInt(C._O_["totaltime"]) + j
							}
						}
					}
				}
			}
		},
		returnStatus: function(s, j) {
			var h = s;
			if (this._H_ == 3) {
				h = this._E_["p"] + "->" + h
			}
			if (this._M_ && j <= this._H_) {
				this._L_(h)
			}
		},
		addO: function(s, z) {
			this._O_[s] = z
		},
		getStatus: function() {
			return this._O_
		},
		playTime: function() {
			var C = CKobject;
			var t = C._V_["currentTime"];
			C._O_["time"] = t;
			if (C._J_ > 0 && t > C._J_) {
				C._J_ = 0;
				C.videoSeek(C._O_["totaltime"])
			}
			C.returnStatus("time:" + t, 1)
		}
	};
	window.CKobject = CKobject
})();