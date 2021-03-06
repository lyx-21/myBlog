const sequelize = require("./db");
const { DataTypes } = require("sequelize");

// 创建一个用户模型对象
const Admin = sequelize.define(
    "Admin", 
    {
        loginId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loginPwd: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    })

    module.exports = Admin;