!function(f){"use strict";var g="ht",b=f[g],L=b.Default,p=Math,I=(p.PI,p.sin,p.cos,p.atan2,p.sqrt,p.max),t=p.floor,o=(p.round,p.ceil),v=b.Shape,m=(b.Edge,b.List),s=b.Style,n=b.graph,T=L.getInternal(),C=T.ui(),R=null,e="prototype",h=f.clearInterval,O=f.setInterval,U=function(T){var L=T.data,V=this.dm();if(L&&"add"===T.kind){var n=V.$1c,Y=L instanceof v?"shape.":"edge.";n&&L.s(Y+"dash.flow")&&n.indexOf(L)<0&&n.push(L)}"clear"===T.kind&&(V.$1c=[])},K=function(V){var J=V.property,j=V.data,b=V.newValue,e=this.dm().$1c,L=j instanceof v?"s:shape.dash.flow":"s:edge.dash.flow";if(e&&J===L)if(b)e.indexOf(j)<0&&e.push(j);else for(var q=e.length,c=0;q>c;c++)if(e[c]===j){e.splice(c,1);break}},P=n.GraphView[e],V=C.EdgeUI[e],c=C.ShapeUI[e],G=c._80o,S=V._80o,i=b.DataModel[e],B=i.prepareRemove,A=P.setDataModel;s["edge.dash.flow.step"]==R&&(s["edge.dash.flow.step"]=3),s["shape.dash.flow.step"]==R&&(s["shape.dash.flow.step"]=3),i.prepareRemove=function(H){B.call(this,H);var d=H._dataModel,n=d.$1c;if(n)for(var R=n.length,j=0;R>j;j++)if(n[j]===H){n.splice(j,1);break}},P.setDataModel=function(S){var t=this,o=t._dataModel;if(o!==S){o&&(o.umm(U,t),o.umd(K,t),o.$1c=[]),S.mm(U,t),S.md(K,t);var Q=S.$1c=[];S.each(function(q){var L=q instanceof v?"shape.":"edge.";q.s(L+"dash.flow")&&Q.indexOf(q)<0&&Q.push(q)}),A.call(t,S)}},P.setDashFlowInterval=function(E){var i=this,n=i.$2c;i.$2c=E,i.fp("dashFlowInterval",n,E),i.$3c!=R&&(h(i.$3c),delete i.$3c,i.enableDashFlow(E))},P.getDashFlowInterval=function(){return this.$2c},P.$4c=function(){var f,l,u,K=this,j=K.tx(),q=K.ty(),H=K._zoom,F=K.getWidth(),h=K.getHeight(),R={x:-j/H,y:-q/H,width:F/H,height:h/H},J=K.dm().$1c,g=K._56I,W=new m;if(J.forEach(function(O){g[O.getId()]&&(f=K.getDataUI(O),f&&(u=f._79o(),u&&W.add(u)))}),0!==W.size()&&(W.each(function(Z){L.intersectsRect(R,Z)&&(l=L.unionRect(l,Z))}),l&&(l&&(L.grow(l,I(1,1/H)),l.x=t(l.x*H)/H,l.y=t(l.y*H)/H,l.width=o(l.width*H)/H,l.height=o(l.height*H)/H,l=L.intersection(R,l)),l))){var V=K._canvas.getContext("2d");V.save(),V.lineCap=L.lineCap,V.lineJoin=L.lineJoin,T.translateAndScale(V,j,q,H),V.beginPath(),V.rect(l.x,l.y,l.width,l.height),V.clip(),V.clearRect(l.x,l.y,l.width,l.height),K.$5c(V,l),V.restore()}},P.$5c=function(M,r){var a,N,I=this;I._93db(M),I.each(function(P){I._56I[P._id]&&(a=I.getDataUI(P),a&&(N=a._79o(),(!r||L.intersectsRect(r,N))&&(a.$7c=!0,a._42(M),delete a.$7c)))}),I._92db(M)},P.enableDashFlow=function(v){var I=this;I.$3c==R&&(I.$3c=O(function(){I.$4c()},v||I.$2c||50))},P.disableDashFlow=function(){var X=this;h(X.$3c),delete X.$3c};var y=function(){var F=this,f=F._data,s=f instanceof v?"shape.":"edge.",B=f.s(s+"dash.pattern"),t=f.s(s+"dash.flow.reverse");if(B&&f.s(s+"dash")&&f.s(s+"dash.flow")&&F.$7c){var E=F.s(s+"dash.offset")||0,_=f.s(s+"dash.flow.step"),u=f.getStyleMap(),w=0;B.forEach(function(u){w+=u}),t&&(_=-_),E-=_,E%=w,u||(f._styleMap=u={}),u[s+"dash.offset"]=E}};V._80o=function(N){S.call(this,N),y.call(this)},c._80o=function(h){G.call(this,h),y.call(this)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);