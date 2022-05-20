import request from "./core";
export default {
  // 2.登录
  login(data) {
    return request({
      url: "/login/",
      method: "post",
      data
    });
  },
  // 1.注册
  register(data) {
    return request({
      url: "/register/",
      method: "post",
      data
    });
  },

  //教师部分接口管理
  // 3.获取省份数据
  getprovice(data) {
    return request({
      url: "provinces/",
      method: "get",
      params: data
    });
  },

  //6.查询待领取的常规任务
  getDetail(data) {
    return request({
      url: "spare_routine_tasks/",
      method: "post",
      data
    });
  },

  // 9.查询待领取的审核任务
  reviewTask(data) {
    return request({
      url: 'spare_audit_tasks/',
      method: 'post',
      data
    });
  },

  // 7.获取作文批改任务数据
  check(data) {
    return request({
      url: 'correct_article_info/',
      method: 'post',
      data
    });
  },
  // 8.作文批改结果存储--页面ajax

  //13.获取作文批改审核任务数据
  taskReview(data) {
    return request({
      url: "correct_verify/",
      method: "post",
      data
    });
  },
  //14.作文批改审核结果提交
  taskSubmit(data) {
    return request({
      url: "correct_verify_result/",
      method: "post",
      data
    });
  },

  //12.我的任务数据
  workDetail(data) {
    return request({
      url: 'mytasks/',
      method: 'post',
      data
    });
  },

  // 4.获取OCR识别任务数据
  ocrInitialize(data) {
    return request({
      url: "ocr_task_info/",
      method: "post",
      data
    });
  },
  // 5.OCR识别结果存储
  ocrSave(data) {
    return request({
      url: "ocr_result/",
      method: "post",
      data
    });
  },

  //10.获取OCR审核任务数据
  ocrReview(data) {
    return request({
      url: "ocr_check/",
      method: "post",
      data
    });
  },
  //11.OCR审核结果存储
  ocrSubmit(data) {
    return request({
      url: "ocr_check_result/",
      method: "post",
      data
    });
  },

  //15.密码修改接口
  submitUserPass(data) {
    return request({
      url: "password/",
      method: "post",
      data
    });
  },

  // 16.获取用户信息
  getInfo(data) {
    return request({
      url: "user_info/",
      method: "get",
      data
    });
  },

  //17.修改用户信息
  change(data) {
    return request({
      url: "user_info/",
      method: "post",
      data
    });
  },


  //学生部分接口管理
  // 作文提交页面接口
  refer(data) {
    return request({
      url: "",
      method: "post",
      data
    });
  },
  //批改详情页面接口
  getArtical(data) {
    return request({
      url: "",
      method: "post",
      data
    });
  }
};