export function test_promise(v){
    return new Promise((resolve, reject)=>{
        if(v){
            resolve("Promise成功!!!");
        } else {
            reject("Promise失敗...");
        }
    });
}

(async ()=> {
  try{
      const ret = await test_promise(true);
      console.log(ret);    // 「OK」と表示される
  }catch(err){
      console.log(err);    // 「ERROR」と表示される
  }
})();
