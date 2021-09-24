<template>
    <div>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "UserTable",
        mounted(){
           this.$axios.get("/api/getUsers")
               .then(resp => { //把服务器返回的数据,赋值给当前视图的变量
                   this.tableData = resp.data;
               });
        },
        data() {
            return {
                tableData: []
            }
        }
    }
</script>

<style scoped>

</style>