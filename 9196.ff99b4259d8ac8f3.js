"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9196],{9196:(A,c,s)=>{s.r(c),s.d(c,{Tab2PageModule:()=>b});var i=s(7479),d=s(6895),r=s(4719),h=s(581),m=s(8564),g=s(7489),e=s(6738),p=s(452),T=s(106),f=s(9687);function _(t,l){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-grid")(2,"ion-row")(3,"ion-col"),e._uU(4),e.qZA(),e.TgZ(5,"ion-col"),e._uU(6),e.qZA(),e.TgZ(7,"ion-col"),e._uU(8),e.qZA()()()()),2&t){const n=l.$implicit;e.xp6(4),e.hij(" ",n.sum," "),e.xp6(2),e.hij(" ",n.ans," "),e.xp6(2),e.hij(" ",n.pressed," ")}}function Z(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Logs"),e.qZA(),e.TgZ(4,"ion-buttons",17)(5,"ion-button",18),e.NdJ("click",function(){e.CHM(n);const u=e.oxw();return e.KtG(u.setOpen(!1))}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content",19)(8,"ion-list")(9,"ion-item")(10,"ion-grid")(11,"ion-row")(12,"ion-col"),e._uU(13," Sum "),e.qZA(),e.TgZ(14,"ion-col"),e._uU(15," Answer "),e.qZA(),e.TgZ(16,"ion-col"),e._uU(17," Pressed "),e.qZA()()()(),e.YNc(18,_,9,3,"ion-item",20),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(18),e.Q6J("ngForOf",n.logs)}}const C=[{path:"",component:(()=>{class t{constructor(n,o,u,a,S){this.router=n,this._sp=o,this._events=u,this._ngZone=a,this._logger=S,this.segment="dist-time",this.t_val=!1,this.countSums=10,this.mSettingsCfg={sev:0,numSums:this.countSums,isSessionActive:!1,numCorrect:0,numAttempted:0,segment:"dist-time"},this.isModalOpen=!1}ionViewDidEnter(){let n=this._sp.load();n&&(this.mSettingsCfg=n),this.mSettingsCfg&&this.mSettingsCfg.numAttempted>0&&g.isEqual(this.mSettingsCfg.numAttempted,this.mSettingsCfg.numSums)&&(this.t_val=!1)}isDisableStart(){return 0===this.countSums}onToggleChange(n){n.target.checked?(this._logger.clear(),g.set(this.mSettingsCfg,"numCorrect",0),g.set(this.mSettingsCfg,"numAttempted",0),g.set(this.mSettingsCfg,"isSessionActive",!0),g.set(this.mSettingsCfg,"segment",this.segment),this._sp.save(this.mSettingsCfg),this.router.navigate(["../tabs/tab1"])):g.set(this.mSettingsCfg,"isSessionActive",!1)}onSeverityChange(n){const o=parseInt(n.target.value);console.log(`Sev - ${o}`),g.set(this.mSettingsCfg,"sev",o)}onCountChange(n){this.countSums=parseInt(n.target.value),console.log(`Count - ${this.countSums}`),g.set(this.mSettingsCfg,"numSums",this.countSums)}setOpen(n){this.logs=this._logger.read(),this.isModalOpen=n}isDisabled(){return this.logs=this._logger.read(),0===g.size(this.logs)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.F0),e.Y36(p.m),e.Y36(T.n),e.Y36(e.R0b),e.Y36(f.i))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab2"]],decls:43,vars:18,consts:[[3,"translucent"],[3,"fullscreen"],[3,"ngModel","disabled","checked","ngModelChange","ionChange"],[3,"ngModel","ngModelChange"],["value","dist-time"],["value","percentage"],["value","profit-loss"],["value","num-play"],["value","random"],[3,"ticks","snaps","min","max","ionChange"],["size","small","slot","start","name","paper-plane"],["size","small","slot","end","name","rocket"],[3,"ticks","snaps","min","max","pin","value","ionChange"],["size","small","slot","start","name","arrow-down-outline"],["size","small","slot","end","name","arrow-up-outline"],["expand","full",3,"disabled","click"],[3,"isOpen"],["slot","end"],[3,"click"],[1,"ion-padding"],[4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Settings "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-item")(6,"ion-label"),e._uU(7,"Start"),e.qZA(),e.TgZ(8,"ion-toggle",2),e.NdJ("ngModelChange",function(a){return o.t_val=a})("ionChange",function(a){return o.onToggleChange(a)}),e.qZA()(),e.TgZ(9,"ion-item")(10,"ion-segment",3),e.NdJ("ngModelChange",function(a){return o.segment=a}),e.TgZ(11,"ion-grid")(12,"ion-row")(13,"ion-segment-button",4),e._uU(14," Distance-Time "),e.qZA(),e.TgZ(15,"ion-segment-button",5),e._uU(16," Percentage "),e.qZA()(),e.TgZ(17,"ion-row")(18,"ion-segment-button",6),e._uU(19," Profit-Loss "),e.qZA(),e.TgZ(20,"ion-segment-button",7),e._uU(21," Number play "),e.qZA()(),e.TgZ(22,"ion-row")(23,"ion-segment-button",8),e._uU(24," Random "),e.qZA()()()()(),e.TgZ(25,"ion-item")(26,"ion-label"),e._uU(27," Severity "),e.qZA(),e.TgZ(28,"ion-range",9),e.NdJ("ionChange",function(a){return o.onSeverityChange(a)}),e._UZ(29,"ion-icon",10)(30,"ion-icon",11),e.qZA()(),e.TgZ(31,"ion-item")(32,"ion-label"),e._uU(33," Count "),e.qZA(),e.TgZ(34,"ion-range",12),e.NdJ("ionChange",function(a){return o.onCountChange(a)}),e._UZ(35,"ion-icon",13)(36,"ion-icon",14),e.qZA()(),e.TgZ(37,"ion-row")(38,"ion-col")(39,"ion-button",15),e.NdJ("click",function(){return o.setOpen(!0)}),e._uU(40,"Logs"),e.qZA()()(),e.TgZ(41,"ion-modal",16),e.YNc(42,Z,19,1,"ng-template"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("ngModel",o.t_val)("disabled",o.isDisableStart())("checked",o.t_val),e.xp6(2),e.Q6J("ngModel",o.segment),e.xp6(18),e.Q6J("ticks",!0)("snaps",!0)("min",0)("max",2),e.xp6(6),e.Q6J("ticks",!0)("snaps",!0)("min",0)("max",20)("pin",!0)("value",o.countSums),e.xp6(5),e.Q6J("disabled",o.isDisabled()),e.xp6(2),e.Q6J("isOpen",o.isModalOpen))},dependencies:[i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.gu,i.Ie,i.Q$,i.q_,i.ki,i.I_,i.Nd,i.cJ,i.GO,i.ho,i.sr,i.wd,i.w,i.QI,d.sg,r.JJ,r.On]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(C),m.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Pc,d.ez,r.u5,h.e,v]}),t})()}}]);