var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://localhost/LearnMongoose");
//console.log(db);
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});

var TestSchema = new mongoose.Schema({
	//_id : {type:Number},
    name : { type:String },//属性name,类型为String
    age  : { type:Number, default:0 },//属性age,类型为Number,默认为0
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});

var TestModel = db.model('testCollection',TestSchema);
var TestEntity = new TestModel({
       name : "Lenka",
       age  : 36,
       email: "lenka@qq.com"
});
console.log(TestEntity.name); // Lenka
console.log(TestEntity.age); // 36

// //将TestEntity保存至LearnMongoose数据库中的testCollection集合中
// TestEntity.save(function(error,doc){
// 	if(error){
// 		console.log(error);
// 	}else{
// 		console.log("新增document: "+doc);
// 	}
// });

//查询testCollection中所有document
// TestModel.find({},function(error,docs){
// 	console.log("查询到所有：" + docs);
// });

// //查询所有年龄为36的document
// TestModel.find({"age":36},function(err,docs){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('查询到所有年龄为36：'+ docs);
// 	}
// });

// //往testCollection集合中添加一条documen
// TestModel.create({name:"chen", age:24, email:"chen@163.com"}, function(err, doc){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("-----新增一条documet：----" + doc);
// 	}
// });

//更新数据
// var conditions = {name: 'Chen'};
// var update = {$set:{name:'chen'}};

// TestModel.update(conditions,update,function(err){
// 	if(err) {
//         console.log(error);
//     } else {
//         console.log('更新成功!');
//     }
// });

//删除数据
// var delConditions = {name:"chen"};
// TestModel.remove(delConditions, function(err){
// 	if(err) {
//         console.log(err);
//     } else {
//         console.log('Delete success!');
//     }
// });

//增加测试数据
// TestModel.create([
//                   { name:"test1", age:20 },
//                   { name:"test2", age:30 },
//                   { name:"test3", age:24 },
//                   { name:"test4", age:18 },
//                   { name:"test5", age:60 },
//                   { name:"test6", age:50, email:"t6@qq.com" },
//                   { name:"test7", age:40, email:"t7@163.com" },
//                   { name:"test8", age:27 },
//                   { name:"test9", age:27, email:"t9@yeah.net" },
//                   { name:"test10",age:65 }
//                  ], function(error,docs) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('save ok');
//     }
// });

//find 过滤查询
// TestModel.find({},{name:1, email:1, _id:0},function(err,docs){
//    console.log("只包含name和email属性的全部文档:"+ docs);
// });

//findOne的基本用法 只返回单个文档，
//也就说当查询到即一个符合条件的数据时，将停止继续查询，并返回查询结果
// TestModel.findOne({age:27},function(err,doc){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("查询到年龄为27"+doc);
//   }
// });

//根据文档_id查询
// TestModel.findById('563d7cf4321f311804d9757a',function(err,doc){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("查询到id"+doc);
//   }
// });

//查询18<=age<=60的所有文档
// TestModel.find({age:{"$gt":30,"$lt":60}},function(err,docs){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("查询30≤age≤60的所有文档"+docs);
//   }
// });

// 查询年龄不等于36的文档
// TestModel.find({age:{"$ne":36}},function(err,docs){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("查询年龄不等于36的所有文档"+docs);
//   }
// });

//查询age为18、24、30的所有文档
// TestModel.find({age:{"$in":[18,24,30]}},function(err,docs){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("查询age为18、24、30的所有文档"+docs);
//   }
// });

//查询name为test4或age为24的全部文档
// TestModel.find({"$or":[{name:"test4"},{age:24}]},function(err,docs){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("查询name为test4或age为24的所有文档"+docs);
//   }
// });

//查询所有存在email属性的文档
// TestModel.find({email: {"$exists": true}},function(err,docs){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("查询所有存在email属性的所有文档"+docs);
//   }
// });

//限制数量：find(Conditions,fields,options,callback)
// TestModel.find({},null,{limit:5},function(err,docs){
//     console.log(docs);
// });

//skip函数的功能是略过指定数量的匹配结果，返回余下的查询结果
// TestModel.find({},null,{skip:4},function(err,docs){
//     console.log(docs);
// });

//sort函数可以将查询结果数据进行排序操作，该函数的参数是一个
//或多个键/值对，键代表要排序的键名，值代表排序的方向，1是升序，-1是降序
// TestModel.find({},null,{sort:{age:-1}},function(err,docs){
//   //查询所有数据，并按照age降序顺序返回数据docs
//   console.log(docs);
// });

// var TempSchema = new mongoose.Schema;
// console.log(TempSchema);
// console.log("------------华丽的分割线--------------");
// TempSchema.add({ name: 'String', email: 'String', age: 'Number' });
// console.log("------"+TempSchema);

//在Schema下创建一个实例方法
// var saySchema = new mongoose.Schema({name : String});

// saySchema.method('say', function () {
//   console.log('Trouble Is A Friend');
// });

// var sayModel = mongoose.model('saya', saySchema);
// var lenka = new sayModel();

// lenka.say(); //Trouble Is A Friend

//Schema静态方法
 
// var TestSchema = new mongoose.Schema({
//     name : { type:String },
//     age  : { type:Number, default:0 },
//     email: { type:String, default:"" },
//     time : { type:Date, default:Date.now }
// });
 
TestSchema.static('findByName', function (name, callback) {
    return this.find({ name: name }, callback);
});
 
//var TestModel = db.model("test1", TestSchema );
  
TestModel.findByName('test4', function (err, docs) {
  //docs所有名字叫test4的文档结果集
  if(err){
    console.log(err);
  }else{
    console.log(docs);
  }
});