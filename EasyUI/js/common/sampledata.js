/*菜单样例数据*/
var _menus = {
	"menus": [{
		"menuid": "1",
		"icon": "icon-sys",
		"menuname": "平台管理",
		"menus": [{
			"menuid": "12",
			"menuname": "系统管理",
			"icon": "../img/CategorizeMenu.png",
			"url": "http://hxling.cnblogs.com",
			"child": [{
				"menuid": "140",
				"menuname": "dataGrid",
				"icon": "icon-role",
				"url": "views/baseDatagrid.html"
			},
			{
				"menuid": "150",
				"menuname": "权限设置 3",
				"icon": "icon-set",
				"url": "demo.html"
			}]
		},
		{
			"menuid": "13",
			"menuname": "用户管理",
			"icon": "icon-users",
			"url": "demo2.html",
			"child": [{
				"menuid": "141",
				"menuname": "角色管理 3",
				"icon": "../img/CategorizeMenu.png",
				"url": "demo2.html"
			},
			{
				"menuid": "151",
				"menuname": "权限设置 3",
				"icon": "icon-set",
				"url": "demo.html"
			}]
		},
		{
			"menuid": "14",
			"menuname": "角色管理",
			"icon": "icon-role",
			"url": "demo2.html",
			"child": [{
				"menuid": "142",
				"menuname": "角色管理 3",
				"icon": "icon-role",
				"url": "demo2.html"
			},
			{
				"menuid": "152",
				"menuname": "权限设置 3",
				"icon": "icon-set",
				"url": "demo.html"
			}]
		},
		{
			"menuid": "15",
			"menuname": "权限设置",
			"icon": "icon-set",
			"url": "demo.html",
			"child": [{
				"menuid": "143",
				"menuname": "用户管理",
				"icon": "icon-role",
				"url": "views/platform-setting/privilege-setting/user-admin.html"
			},
			{
				"menuid": "153",
				"menuname": "角色管理",
				"icon": "icon-set",
				"url": "demo.html"
			},
			{
				"menuid": "153",
				"menuname": "权限管理",
				"icon": "icon-set",
				"url": "demo.html"
			}
			
			 ]
		},
		{
			"menuid": "16",
			"menuname": "系统日志",
			"icon": "icon-log",
			"url": "demo1.html",
			"child": [{
				"menuid": "144",
				"menuname": "角色管理 3",
				"icon": "icon-role",
				"url": "demo2.html"
			},
			{
				"menuid": "154",
				"menuname": "权限设置 3",
				"icon": "icon-set",
				"url": "demo.html"
			}]
		}]
	},
	{
		"menuid": "8",
		"icon": "icon-sys",
		"menuname": "员工管理",
		"menus": [{
			"menuid": "21",
			"menuname": "员工列表",
			"icon": "icon-nav",
			"url": "demo.html"
		},
		{
			"menuid": "22",
			"menuname": "视频监控",
			"icon": "icon-nav",
			"url": "demo1.html",
			"child": [{
				"menuid": "221",
				"menuname": "员工列表 3",
				"icon": "icon-nav",
				"url": "demo.html"
			},
			{
				"menuid": "222",
				"menuname": "视频监控 3",
				"icon": "icon-nav",
				"url": "demo1.html"
			}]
		}]
	},
	{
		"menuid": "56",
		"icon": "icon-sys",
		"menuname": "部门管理",
		"menus": [{
			"menuid": "31",
			"menuname": "添加部门",
			"icon": "icon-nav",
			"url": "demo1.html"
		},
		{
			"menuid": "321",
			"menuname": "部门列表",
			"icon": "icon-nav",
			"url": "demo2.html",
			"child": [{
				"menuid": "311",
				"menuname": "添加部门 4",
				"icon": "icon-nav",
				"url": "demo1.html"
			},
			{
				"menuid": "312",
				"menuname": "部门列表 4",
				"icon": "icon-nav",
				"url": "demo2.html"
			}]
		}]
	}]
};
 
/*表格样例数据*/
var _useradmin={
    "rows": [
        {
        	"id":"1",
            "exployee_name":"张三丰",
            "exployee_number": "001",
            "in_time": "2015-02-23",
            "out_time":"2015-02-23",
            "created":"2015-02-23",
            "updated":"2015-02-23"
            },
        {   
        	"id":"1",
            "exployee_name":"张三丰",
            "exployee_number": "001",
            "in_time": "2015-02-23",
            "out_time":"2015-02-23",
            "created":"2015-02-23",
            "updated":"2015-02-23"
            },
        {
        	"id":"1",
            "exployee_name":"张三丰",
            "exployee_number": "001",
            "in_time": "2015-02-23",
            "out_time":"2015-02-23",
            "created":"2015-02-23",
            "updated":"2015-02-23"
            },
        {
        	"id":"1",
            "exployee_name":"张三丰ww",
            "exployee_number": "001",
            "in_time": "2015-02-23",
            "out_time":"2015-02-23",
            "created":"2015-02-23",
            "updated":"2015-02-23"
            },
        {
        	"id":"1",
            "exployee_name":"张三丰",
            "exployee_number": "001",
            "in_time": "2015-02-23",
            "out_time":"2015-02-23",
            "created":"2015-02-23",
            "updated":"2015-02-23"
            },
        {
        	"id":"1",
            "exployee_name":"张三丰",
            "exployee_number": "001",
            "in_time": "2015-02-23",
            "out_time":"2015-02-23",
            "created":"2015-02-23",
            "updated":"2015-02-23"
            },
        {
        	"id":"1",
            "exployee_name":"张三丰",
            "exployee_number": "001",
            "in_time": "2015-02-23",
            "out_time":"2015-02-23",
            "created":"2015-02-23",
            "updated":"2015-02-23"
            }
         
    ],
    "total": 7
}
var _datagrid={
    "rows": [
        {
            "code": 1,
            "name": "name1",
            "price": "name1"
         },
        {
            "code": 1,
            "name": "name1",
            "price": "name1"
        },
                 {
            "code": 1,
            "name": "name1",
            "price": "name1"
         },
                 {
            "code": 1,
            "name": "name1",
            "price": "name1"
         },
                 {
            "code": 1,
            "name": "name1",
            "price": "name1"
         },
                 {
            "code": 1,
            "name": "name1",
            "price": "name1"
         },
                 {
            "code": 1,
            "name": "name1",
            "price": "name1"
         },
                 {
            "code": 1,
            "name": "name1",
            "price": "name1"
         },        {
            "code": 1,
            "name": "name1", 
            "price": "2222222222222222222"
         },
         
    ],
    "total": 26
}