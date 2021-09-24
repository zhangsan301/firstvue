<template>
    <div id="myForm">
    <h3>注册逻辑</h3>
    <el-form ref="form" :model="form" label-width="80px" style="width: 60%; text-align:center; margin:auto">
        <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="form.pswd" show-password></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio v-model="form.gender" label="1">男</el-radio>
            <el-radio v-model="form.gender" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="爱好">
            <el-checkbox :indeterminate="form.isIndeterminate" v-model="form.checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="form.hobbies" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="hobby in form.allHobbies" :label="hobby" :key="hobby">{{hobby}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="个人介绍"><el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="form.info">
          </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    pswd:'',
                    gender:'1',
                    isIndeterminate:true,
                    checkAll:false,
                    hobbies: ['上班', '加班'],
                    allHobbies: ['上班', '加班', '吃饭', '睡觉'],
                    info:''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$axios.post("/api/register",this.$qstring.stringify(this.$refs['form'].model))
                    .then(resp=>{
                      alert("注册成功"+resp.data)
                    });

            },
            handleCheckAllChange(val) {
                this.form.hobbies = val ? this.form.allHobbies : [];
                this.form.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.form.hobbies.length;
                this.form.isIndeterminate = checkedCount > 0 && checkedCount < this.form.hobbies.length;
            }
        }
    }
</script>

<style scoped>
    #myForm {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
</style>