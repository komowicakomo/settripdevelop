function run()
{
  for(var i in functions)
  {
    functions[i]();
  }
}

$(document).ready(function(){
  run();
});
