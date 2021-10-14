import request from "@/api/request";

export const validateCode = (data: any) => {
  return request({
    url: "/api/h5/sendCode",
    method: "post",
    data: data,
  });
};

export const registerConfirm = (data: any) => {
  return request({
    url: "/api/h5/checkCode",
    method: "post",
    data: data,
  });
};
