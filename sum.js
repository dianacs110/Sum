const a = function(n)
{if (n===0)
{return 0;}
const c = n + a(n-1);
return c;
}
;
console.log(a(2)); 