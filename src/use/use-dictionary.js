import { getDictionary, getCityDictionary } from "@/api/common";

// 字典类别，多个请用逗号分隔
// 借款用途： DICT_BORROW_FOR
// 证件类型：DICT_ID_TYPE
// 性别：DICT_SEX
// 婚姻状况：DICT_CIVIL_STATUS
// 宗教：DICT_RELIGION
// 收入来源：DICT_INCOME_SOURCE
// 行业领域：DICT_INDUSTRY_FIELD
// 账号归属：DICT_ACCOUNT_OWNED
// 账号类型：DICT_ACCOUNT_TYPE
// 常见问题类型：DICT_FAQ_TYPE
function useDictionary() {
  const typeList = [
    "DICT_BORROW_FOR",
    "DICT_ID_TYPE",
    "DICT_SEX",
    "DICT_CIVIL_STATUS",
    "DICT_RELIGION",
    "DICT_INCOME_SOURCE",
    "DICT_INDUSTRY_FIELD",
    "DICT_ACCOUNT_OWNED",
    "DICT_ACCOUNT_TYPE",
    "DICT_FAQ_TYPE",
  ];
  // 初始化数据
  let DICT_BORROW_FOR_COLUMNS = [];
  let DICT_BORROW_FOR_OBJECT = {};
  let DICT_ID_TYPE_COLUMNS = [];
  let DICT_ID_TYPE_OBJECT = {};
  let DICT_SEX_COLUMNS = [];
  let DICT_SEX_OBJECT = {};
  let DICT_CIVIL_STATUS_COLUMNS = [];
  let DICT_CIVIL_STATUS_OBJECT = {};
  let DICT_RELIGION_COLUMNS = [];
  let DICT_RELIGION_OBJECT = {};
  let DICT_INCOME_SOURCE_COLUMNS = [];
  let DICT_INCOME_SOURCE_OBJECT = {};
  let DICT_INDUSTRY_FIELD_COLUMNS = [];
  let DICT_INDUSTRY_FIELD_OBJECT = {};
  let DICT_ACCOUNT_OWNED_COLUMNS = [];
  let DICT_ACCOUNT_OWNED_OBJECT = {};
  let DICT_ACCOUNT_TYPE_COLUMNS = [];
  let DICT_ACCOUNT_TYPE_OBJECT = {};
  let DICT_FAQ_TYPE_COLUMNS = [];
  let DICT_FAQ_TYPE_OBJECT = {};

  // 根据后端值处理数据
  getDictionary({
    param: {
      type: typeList.toString(),
    },
  }).then((res) => {
    const data = res.data;
    data["DICT_BORROW_FOR"].forEach((item) => {
      DICT_BORROW_FOR_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_BORROW_FOR_OBJECT[item.code] = item.value;
    });

    data["DICT_ID_TYPE"].forEach((item) => {
      DICT_ID_TYPE_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_ID_TYPE_OBJECT[item.code] = item.value;
    });
    data["DICT_SEX"].forEach((item) => {
      DICT_SEX_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_SEX_OBJECT[item.code] = item.value;
    });
    data["DICT_CIVIL_STATUS"].forEach((item) => {
      DICT_CIVIL_STATUS_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_CIVIL_STATUS_OBJECT[item.code] = item.value;
    });
    data["DICT_RELIGION"].forEach((item) => {
      DICT_RELIGION_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_RELIGION_OBJECT[item.code] = item.value;
    });
    data["DICT_INCOME_SOURCE"].forEach((item) => {
      DICT_INCOME_SOURCE_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_INCOME_SOURCE_OBJECT[item.code] = item.value;
    });
    data["DICT_INDUSTRY_FIELD"].forEach((item) => {
      DICT_INDUSTRY_FIELD_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_INDUSTRY_FIELD_OBJECT[item.code] = item.value;
    });
    data["DICT_ACCOUNT_OWNED"].forEach((item) => {
      DICT_ACCOUNT_OWNED_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_ACCOUNT_OWNED_OBJECT[item.code] = item.value;
    });
    data["DICT_ACCOUNT_TYPE"].forEach((item) => {
      DICT_ACCOUNT_TYPE_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_ACCOUNT_TYPE_OBJECT[item.code] = item.value;
    });
    data["DICT_FAQ_TYPE"].forEach((item) => {
      DICT_FAQ_TYPE_COLUMNS.push({
        text: item.value,
        value: item.code,
      });
      DICT_FAQ_TYPE_OBJECT[item.code] = item.value;
    });
  });

  // 返回数据
  return {
    DICT_BORROW_FOR_COLUMNS,
    DICT_BORROW_FOR_OBJECT,
    DICT_ID_TYPE_COLUMNS,
    DICT_ID_TYPE_OBJECT,
    DICT_SEX_COLUMNS,
    DICT_SEX_OBJECT,
    DICT_CIVIL_STATUS_COLUMNS,
    DICT_CIVIL_STATUS_OBJECT,
    DICT_RELIGION_COLUMNS,
    DICT_RELIGION_OBJECT,
    DICT_INCOME_SOURCE_COLUMNS,
    DICT_INCOME_SOURCE_OBJECT,
    DICT_INDUSTRY_FIELD_COLUMNS,
    DICT_INDUSTRY_FIELD_OBJECT,
    DICT_ACCOUNT_OWNED_COLUMNS,
    DICT_ACCOUNT_OWNED_OBJECT,
    DICT_ACCOUNT_TYPE_COLUMNS,
    DICT_ACCOUNT_TYPE_OBJECT,
    DICT_FAQ_TYPE_COLUMNS,
    DICT_FAQ_TYPE_OBJECT,
  };
}

export default useDictionary;
