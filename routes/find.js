const express = require('express');
const router = express.Router();
const Promise = require('promise');

/* GET find. */
router.get('/',async (req, res) => {
  var array = Array.from({length: 1000000}, () => Math.floor(Math.random() * 100));
  var max=array[0];
  for(var i=1;i< array.length;i++)
  {
    if(array[i]>max) {
      max=array[i];
    }
  }
  var max2=array[0];
  for(var i=1;i< array.length;i++)
  {
    if(array[i]>max2 && array[i]<max) {
      message: max2=array[i];
    }
  }
  console.log(max2);
  res.send(array);
});
module.exports = router;
