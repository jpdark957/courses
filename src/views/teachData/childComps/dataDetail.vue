<template>
  <el-row>
    <el-col :span="18" :offset="3" :xs="{span: 24, offset: 0}">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div class="text item">
          <el-table :data="tableData" style="width: 100%" @row-click="cllick">
            <el-table-column prop="filename" label="文件名"></el-table-column>
            <el-table-column prop="update" label="上传时间"></el-table-column>
            <el-table-column label="操作" width="170">
              <template slot-scope="scope">
                <el-button type="primary"  @click.stop.prevent="centerDialogVisible = true">查看</el-button>
                <!-- <el-button type="primary"  @click.stop.prevent="deleteRow(scope.$index, tableData)">下载</el-button> -->
                <el-button type="primary"  @click.stop.prevent="downLoad(scope.$index, tableData)">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-col>



<el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="70%"
  center>
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="downLoad">下 载</el-button>
  </span>
</el-dialog>



  </el-row>




</template>

<script>
export default {
  name: "dataDetail",
  data() {
    return {
      centerDialogVisible: false,
      tableData: [
        {
          id: 1,
          update: "2016-05-02",
          filename: "linux全套视频下载",
          url: 'http://localhost:8080/img/test4.4e21145a.jpg'
        },
        {
          id: 2,
          update: "2016-05-04",
          filename: "linux常用命令大全",
          url: 'http://localhost:8080/img/test2.f7e72f1d.jpg'
        },
        {
          id: 3,
          update: "2016-05-01",
          filename: "linux视频配套课件",
          url: 'http://localhost:8080/media/aaa.8e1aa404.mp4'
        },
        {
          id: 4,
          update: "2016-05-03",
          filename: "linux目录结构",
          url: 'http://localhost:8080/img/test1.2e8d86db.jpg'
        }
      ]
    };
  },
  methods: {
    cllick(row,event,column) {
      console.log(row)
      console.log(event)
      console.log(column)
      console.log(row.id)
    },
    deleteRow(index, rows) {
      // rows.splice(index, 1);
      this.centerDialogVisible = true
      console.log(index)
      console.log(rows)
    },
    downLoad(row, tableData) {
      console.log(row)
      let urls = tableData[row].url
      window.open(urls)
      // window.location.href = urls
    },
  }
};
</script>

<style scoped>
</style>