import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://leo:Hechen920804@fionajay920804-nfpvu.azure.mongodb.net/lkmanager?retryWrites=true&w=majority',{ useNewUrlParser: true });

const errorSchema = mongoose.Schema({
    // 错误名称
    error_name: {type: String, required: true},
    // 错误消息
    error_message: {type: String, required: true},
    // 错误堆栈
    error_stack: {type: String, required: true},
    // 错误时间
    e_time: {type: Date, default: Date.now},
});

const Error_log = mongoose.model('Error', errorSchema);
export default  Error_log;