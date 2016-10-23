// Tiny Matrix Class
// Copyright 2016 Motivara
var Matrix = function(r,c) { // pass a row count or an array of arrays
  if(Array.isArray(r)) {this.$=r;}
  else {
    var i,j;
    for(i=0,this.$=[];i<r;i++) {
      this.$[i]=[];
      if (typeof c === 'number') // if col count, then init
        {for(j=0;j<c;j++) {this.$[i][j]=0;}}
    }
  }
};
Matrix.prototype = {
  constructor: Matrix,
  T: function() { //transpose
    var ar=this.rows,ac=this.cols,b,i,j;
    for(b=new Matrix(ac),i=0;i<ac;i++)
      {for(j=0;j<ar;j++) { b.$[i][j]=this.$[j][i];}}
    return b;
  },
  err: function(ar,xc,br,bc){return "shapes ("+ar+","+xc+") and ("+br+","+bc+") not aligned";},
  dot: function(b) { // matrix product: $(m,n) * b(n,p) = c(m,p)
    if(Array.isArray(b)) {b=new Matrix(b);}
    var ar=this.rows,ac=this.cols,br=b.rows,bc=b.cols,c,i,j,k;
    if (ac!==br) {throw(this.err(ar,ac,br,bc));}
    for (i=0,c= new Matrix(ar); i<ar; ++i)
      {for (j=0; j<bc; ++j)
        {for (k=c.$[i][j]=0; k<ac; ++k) {c.$[i][j] += this.$[i][k] * b.$[k][j];}}}
    return c;
  },
  mul: function(b) {
    if(Array.isArray(b)) {b=new Matrix(b);}
    var ar=this.rows,ac=this.cols,br=b.rows,bc=b.cols,c,i,j;
    if (ar===br && ac===bc) {
      for(c=new Matrix(ar),i=0;i<ar;i++) // entrywise product: $(m,n) * b(m,n) = c(m,n)
        {for(j=0;j<ac;j++) {c.$[i][j]=this.$[i][j]*b.$[i][j];}}
      return c;
    } else
      if (ac===br) // e.g. (3,2) * (2,5) > perform dot product
        {return this.dot(b);} // or   (3,2) * (2,3)
      else //if (ar!=br || ac!=bc) 
        {throw(this.err(ar,ac,br,bc));}  //  (3,3) * (5,6) > err
  },
  sub: function(b) {
    if(Array.isArray(b)) {b=new Matrix(b);}
    var ar=this.rows,ac=this.cols,br=b.rows,bc=b.cols,c,i,j;
    if (ar!==br || ac!==bc) {throw(this.err(ar,ac,br,bc));}
    for(c=new Matrix(ar),i=0;i<ar;i++)
      {for(j=0;j<ac;j++) {c.$[i][j]=this.$[i][j]-b.$[i][j];}}
    return c;
  },
  add: function(b) {
    if(Array.isArray(b)) { b=new Matrix(b); }
    var ar=this.rows,ac=this.cols,br=b.rows,bc=b.cols,c,i,j;
    if (ar!==br || ac!==bc) {throw(this.err(ar,ac,br,bc));}
    for(c=new Matrix(ar),i=0;i<ar;i++)
      {for(j=0;j<ac;j++) {c.$[i][j]=this.$[i][j]+b.$[i][j];}}
    return c;
  },
  map: function(f) {
    if(typeof f !== 'function') {throw("function not passed!");}
    var ar=this.rows,ac=this.cols,c,i,j;
    for(c=new Matrix(ar),i=0;i<ar;i++)
      {for(j=0;j<ac;j++) {c.$[i][j]=f(this.$[i][j]);}}
    return c;
  },
  mean: function() {
    var ar=this.rows,ac=this.cols,m,i,j;
    for(m=0,i=0;i<ar;i++)
      {for(j=0;j<ac;j++) {m+=this.$[i][j];}}
    return m/(ar*ac);
  },
  // getters
  get array() {return this.$;},
  get rows() {return this.$.length;},
  get cols() {return this.$[0].length;}
};
var randomize = function(r,c) { // create a rxc matrix with randomized values +1 to -1
  return new Matrix(r,c).map(function(x) {
      return 2*Math.random()-1;});
};
