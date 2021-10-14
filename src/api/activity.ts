import request from "@/api/request";

// 获取活动排行
export function getActivityRank(data: any) {
  return request({
    url: "/api/h5/leaderboard",
    method: "post",
    data: data,
  });
}
// 活动提醒
export function postActivityRemind(data: any) {
  return request({
    url: "/api/h5/remind",
    method: "post",
    data: data,
  });
}
