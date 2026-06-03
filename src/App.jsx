import { useState, useRef } from "react";

const CATS = {
  饮食:  { icon:"🍜", color:"#FF6B6B", bg:"#FFF0F0", key:"food" },
  日用品:{ icon:"🛒", color:"#4ECDC4", bg:"#F0FFFE", key:"daily" },
  娱乐:  { icon:"🎮", color:"#A78BFA", bg:"#F5F0FF", key:"entertainment" },
  出行:  { icon:"🚇", color:"#F59E0B", bg:"#FFFBEB", key:"transport" },
  其他:  { icon:"📦", color:"#94A3B8", bg:"#F8FAFC", key:"other" },
};
const ICONS=["📦","🏥","💊","🐶","🎓","👗","💇","🏋️","☕","🧾","🎁","🏠","💡","📱","✈️","🎵","🍺","🧴","🛠️","💼"];
const COLORS=["#94A3B8","#F43F5E","#F97316","#EAB308","#22C55E","#06B6D4","#3B82F6","#8B5CF6","#EC4899","#14B8A6"];

const DATA=[
  {id:1,date:"2026-05-31",desc:"广州骑安",amount:1.8,category:"transport",confirmed:true},
  {id:2,date:"2026-05-31",desc:"猫眼",amount:28,category:"entertainment",confirmed:true},
  {id:3,date:"2026-05-30",desc:"园区食堂",amount:18,category:"food",confirmed:true},
  {id:4,date:"2026-05-29",desc:"兰州牛肉面冠新佳苑店",amount:15,category:"food",confirmed:true},
  {id:5,date:"2026-05-29",desc:"园区食堂",amount:16,category:"food",confirmed:true},
  {id:6,date:"2026-05-29",desc:"园区食堂",amount:3.5,category:"food",confirmed:true},
  {id:7,date:"2026-05-28",desc:"园区食堂",amount:16,category:"food",confirmed:true},
  {id:8,date:"2026-05-28",desc:"园区食堂",amount:13,category:"food",confirmed:true},
  {id:9,date:"2026-05-28",desc:"园区食堂",amount:3.5,category:"food",confirmed:true},
  {id:10,date:"2026-05-27",desc:"冠新超市",amount:48,category:"daily",confirmed:true},
  {id:11,date:"2026-05-27",desc:"园区食堂",amount:20,category:"food",confirmed:true},
  {id:12,date:"2026-05-27",desc:"园区食堂",amount:16,category:"food",confirmed:true},
  {id:13,date:"2026-05-27",desc:"园区食堂",amount:5,category:"food",confirmed:true},
  {id:14,date:"2026-05-26",desc:"兰州牛肉面冠新佳苑店",amount:15.78,category:"food",confirmed:true},
  {id:15,date:"2026-05-26",desc:"园区食堂",amount:15,category:"food",confirmed:true},
  {id:16,date:"2026-05-26",desc:"园区食堂",amount:5,category:"food",confirmed:true},
  {id:17,date:"2026-05-25",desc:"公共自行车",amount:2,category:"transport",confirmed:true},
  {id:18,date:"2026-05-25",desc:"兰州牛肉面冠新佳苑店",amount:15.88,category:"food",confirmed:true},
  {id:19,date:"2026-05-25",desc:"园区食堂",amount:7,category:"food",confirmed:true},
  {id:20,date:"2026-05-25",desc:"园区食堂",amount:3.5,category:"food",confirmed:true},
  {id:21,date:"2026-05-23",desc:"兰州牛肉面",amount:25,category:"food",confirmed:true},
  {id:22,date:"2026-05-22",desc:"园区食堂",amount:16,category:"food",confirmed:true},
  {id:23,date:"2026-05-22",desc:"园区食堂",amount:7,category:"food",confirmed:true},
  {id:24,date:"2026-05-22",desc:"美团外卖",amount:1.8,category:"food",confirmed:true},
  {id:25,date:"2026-05-21",desc:"园区食堂",amount:15,category:"food",confirmed:true},
  {id:26,date:"2026-05-21",desc:"园区食堂",amount:10,category:"food",confirmed:true},
  {id:27,date:"2026-05-21",desc:"园区食堂",amount:7,category:"food",confirmed:true},
  {id:28,date:"2026-05-20",desc:"园区食堂",amount:11,category:"food",confirmed:true},
  {id:29,date:"2026-05-19",desc:"园区食堂",amount:18,category:"food",confirmed:true},
  {id:30,date:"2026-05-18",desc:"松鼠便利(滨江)",amount:44.8,category:"daily",confirmed:true},
  {id:31,date:"2026-05-18",desc:"美团外卖",amount:2.8,category:"food",confirmed:true},
  {id:32,date:"2026-05-17",desc:"唛多客汉堡·炸鸡",amount:11.82,category:"food",confirmed:true},
  {id:33,date:"2026-05-17",desc:"犀牛百货(滨江店)",amount:88.39,category:"daily",confirmed:true},
  {id:34,date:"2026-05-17",desc:"智慧房东电费",amount:50.2,category:"daily",confirmed:true},
  {id:35,date:"2026-05-17",desc:"luckin coffee",amount:9.9,category:"food",confirmed:true},
  {id:36,date:"2026-05-17",desc:"锦湖图文广告",amount:5.1,category:"daily",confirmed:true},
  {id:37,date:"2026-05-17",desc:"A王姐转账",amount:2260,category:null,confirmed:false},
  {id:38,date:"2026-05-17",desc:"西安面馆",amount:16,category:"food",confirmed:true},
  {id:39,date:"2026-05-17",desc:"杭州地铁",amount:3,category:"transport",confirmed:true},
  {id:40,date:"2026-05-17",desc:"杭州地铁",amount:2,category:"transport",confirmed:true},
  {id:41,date:"2026-05-17",desc:"杭州地铁",amount:2,category:"transport",confirmed:true},
  {id:42,date:"2026-05-16",desc:"东北饺子馆",amount:14.5,category:"food",confirmed:true},
  {id:43,date:"2026-05-16",desc:"亦可便利超市",amount:10,category:"food",confirmed:true},
  {id:44,date:"2026-05-16",desc:"杭州友宾医疗门诊",amount:74,category:null,confirmed:false},
  {id:45,date:"2026-05-15",desc:"拾里稻健康菜",amount:18.7,category:"food",confirmed:true},
  {id:46,date:"2026-05-15",desc:"杭州地铁",amount:4,category:"transport",confirmed:true},
  {id:47,date:"2026-05-13",desc:"杭州地铁",amount:3,category:"transport",confirmed:true},
  {id:48,date:"2026-05-13",desc:"家缘便利店",amount:14,category:"food",confirmed:true},
  {id:49,date:"2026-05-13",desc:"邹建明",amount:10,category:null,confirmed:false},
  {id:50,date:"2026-05-13",desc:"杭州地铁",amount:2,category:"transport",confirmed:true},
  {id:51,date:"2026-05-13",desc:"厨八艺面馆",amount:16.88,category:"food",confirmed:true},
  {id:52,date:"2026-05-13",desc:"杭州地铁",amount:3,category:"transport",confirmed:true},
  {id:53,date:"2026-05-12",desc:"拣枝而栖青年旅舍",amount:86,category:"entertainment",confirmed:true},
  {id:54,date:"2026-05-12",desc:"铭清小吃店",amount:13,category:"food",confirmed:true},
  {id:55,date:"2026-05-12",desc:"铭清小吃店",amount:17,category:"food",confirmed:true},
  {id:56,date:"2026-05-11",desc:"杭州地铁",amount:4,category:"transport",confirmed:true},
  {id:57,date:"2026-05-11",desc:"乐腾百货商店",amount:8,category:"daily",confirmed:true},
  {id:58,date:"2026-05-11",desc:"京城马夫子兰州牛肉面",amount:17.5,category:"food",confirmed:true},
  {id:59,date:"2026-05-11",desc:"杭州地铁",amount:4,category:"transport",confirmed:true},
  {id:60,date:"2026-05-11",desc:"杭州地铁",amount:3,category:"transport",confirmed:true},
  {id:61,date:"2026-05-11",desc:"拣枝而栖青年旅舍",amount:85.38,category:"entertainment",confirmed:true},
  {id:62,date:"2026-05-10",desc:"唐美丽螺蛳粉",amount:33.59,category:"food",confirmed:true},
  {id:63,date:"2026-05-10",desc:"沙县小吃",amount:14.7,category:"food",confirmed:true},
  {id:64,date:"2026-05-09",desc:"杭州地铁",amount:7,category:"transport",confirmed:true},
  {id:65,date:"2026-05-09",desc:"杭州地铁",amount:2,category:"transport",confirmed:true},
  {id:66,date:"2026-05-09",desc:"杭州地铁",amount:5,category:"transport",confirmed:true},
  {id:67,date:"2026-05-09",desc:"杭州地铁",amount:8,category:"transport",confirmed:true},
  {id:68,date:"2026-05-09",desc:"wxm",amount:13,category:null,confirmed:false},
  {id:69,date:"2026-05-09",desc:"杭州地铁",amount:5,category:"transport",confirmed:true},
  {id:70,date:"2026-05-08",desc:"拼多多平台商户",amount:12.9,category:null,confirmed:false},
];

export default function App() {
  const [records, setRecords] = useState(DATA);
  const [cats, setCats] = useState(CATS);
  const [view, setView] = useState("dashboard");
  const [chartMode, setChartMode] = useState("number");
  const [animKey, setAnimKey] = useState(0);
  const [notif, setNotif] = useState(null);
  const [detailCat, setDetailCat] = useState(null);
  const [noteModal, setNoteModal] = u
