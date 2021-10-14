import request from "@/api/request";

// 用户信息认证
export function certificationUserInfo({ param = {}, token = "" }) {
  return request({
    url: "/api/h5/infoAuth/save",
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      param,
    },
  });
}
