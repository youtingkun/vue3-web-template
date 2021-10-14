import request from "@/api/request";

// 获取字典
export function getDictionary(data: any) {
  return request({
    url: "/api/dict/common",
    method: "post",
    data: data,
  });
}

// 获取城市字典
export function getCityDictionary(data: any) {
  return request({
    url: "/api/dict/area",
    method: "post",
    data: data,
  });
}
