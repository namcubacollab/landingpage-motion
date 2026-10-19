export const chapters = [
  { id: 'hut-gam', number: '01', short: 'Hút gầm', title: 'Bám đường, từ khi chưa lăn bánh.', label: 'ÁP SUẤT & ĐỘ BÁM' },
  { id: 'khi-dong-hoc', number: '02', short: 'Khí động học', title: 'Thân xe biết thay đổi.', label: 'LỰC ÉP & LỰC CẢN' },
  { id: 'danh-lai', number: '03', short: 'Đánh lái', title: 'Một tín hiệu. Một hướng đi.', label: 'ĐIỀU KHIỂN ĐIỆN TỬ' },
  { id: 'vat-lieu', number: '04', short: 'Vật liệu', title: 'Nhẹ đi để làm được nhiều hơn.', label: 'KHỐI LƯỢNG & CẤU TRÚC' },
  { id: 'bo-day', number: '05', short: 'Bộ đẩy', title: 'Khí thoát ra. Xe tiến tới.', label: 'LỰC ĐẨY & CHUYỂN ĐỘNG' },
];
export const materials = [
  {id:'carbon',symbol:'C',name:'Sợi carbon',tag:'ĐỘ CỨNG / KHỐI LƯỢNG',text:'Những sợi rất nhỏ kết hợp thành một vật liệu nhẹ và cứng. Cách xếp sợi giúp định hướng khả năng chịu lực của chi tiết.',note:'Kết cấu composite được minh họa bằng các sợi đan. Không thể suy ra vị trí hoặc tỷ lệ carbon thực tế trên xe từ hình này.'},
  {id:'magnesium',symbol:'Mg',name:'Magiê',tag:'GIẢM KHỐI LƯỢNG',text:'Kim loại có khối lượng riêng thấp, có thể giúp giảm khối lượng ở những chi tiết phù hợp. Chọn vật liệu còn phụ thuộc độ bền, nhiệt và điều kiện làm việc.',note:'Tesla công bố sử dụng magiê nhưng chưa cung cấp bản đồ vật liệu đầy đủ của Roadster.'},
  {id:'titanium',symbol:'Ti',name:'Titanium',tag:'BỀN / KHỐI LƯỢNG',text:'Tỷ lệ độ bền trên khối lượng là một lý do titanium xuất hiện trong những thiết kế hiệu suất cao. Mỗi vật liệu đảm nhiệm một yêu cầu khác nhau.',note:'Không gán vị trí hoặc khối lượng chi tiết khi chưa có tài liệu kỹ thuật xác nhận.'},
];
export const trims = [
 {id:'performance',name:'Performance',tag:'NỀN TẢNG',seats:'02',headline:'Kiểm soát ở mặt đường.',text:'Khí động học chủ động và hệ thống hút gầm là nền tảng. Cấu hình này không được Tesla mô tả là có bộ đẩy khí lạnh.',capabilities:['Khí động học chủ động','Hút gầm đa chế độ'],direction:'none'},
 {id:'thrust',name:'Thrust',tag:'THÊM LỰC TIẾN',seats:'02',headline:'Thêm một hướng lực.',text:'Bộ đẩy khí lạnh ở phía sau bổ sung lực tiến. Khí phóng ra phía sau, xe nhận lực theo hướng ngược lại.',capabilities:['Nền tảng Performance','Bộ đẩy khí lạnh phía sau'],direction:'forward'},
 {id:'rocket',name:'Rocket',tag:'THÊM CÁC HƯỚNG LỰC',seats:'01',headline:'Kiểm soát trong không gian.',text:'Các bộ đẩy bố trí quanh xe hỗ trợ chuyển động theo nhiều hướng và điều chỉnh tư thế. Đây là cấu hình Tesla giới thiệu khả năng bay.',capabilities:['Hệ thống hút gầm','Bộ đẩy quanh thân xe'],direction:'multi'},
];
export function clamp(value,min,max){return Math.min(max,Math.max(min,value));}
// Dimensionless teaching model. Not fitted to Roadster data; never display as physical force.
export function suctionModel(fanOn,sealed){return {lowPressure:fanOn?(sealed?0.84:0.28):0,gripLabel:!fanOn?'Chưa thêm lực ép':sealed?'Lực ép được duy trì':'Lực ép suy giảm'};}
// Explicitly illustrative mapping, not Tesla's steering calibration.
export function steeringDemo(input,mode){return Number((input/(mode==='slow'?2:8)).toFixed(1));}
export const sourceLinks = {
 article:'https://vnexpress.net/tesla-roadster-co-gi-dac-biet-ngoai-kha-nang-bay-lon-5134166.html',
 tesla:'https://www.tesla.com/roadster',
};
