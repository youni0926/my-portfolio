<html>
	<body bgcolor = #FAEAE3>
	<center>
	<?php
	date_default_timezone_set("Asia/Taipei");
	$now = date('Y/m/d H:i:s', time());
	
	
	$msg_day=$_POST['msg_day'];
	
	?>
			  <table border = 0 width = 1100 bgcolor = #E4C8D0 >
  <td align = "center" ><font color = #B28685 size = 6 face = "微軟正黑體"><b>婚&nbsp;&nbsp;&nbsp;&nbsp;婚&nbsp;&nbsp;&nbsp;&nbsp;欲&nbsp;&nbsp;&nbsp;&nbsp;說</b></font color = #B28685 size = 7></td>
  <td align = "center"><a href="wedding_home.php"><font color = #F9F2FC size = 5>| HOME</a></td><td align = "center"><a href="wedding_dress.php"><font color = #F9F2FC size = 5>| 婚紗樣式</a></td>
  <td align = "center"><a href="qaz.php"><font color = #F9F2FC size = 5>| 攝影風格</a></td></table>
			<br><br><font color = #F56D5F size = 6><b>婚婚欲說婚紗預約畫面</font color = #F56D5F size = 7></b><br><br>
			<font> ____________________________________________________________________</font>
			<br><br><font size = 5><b>預定成功</b><br><br></font>感謝您完成了婚婚欲說婚紗預定，以下是您的預約資訊
		</center>
			<br>
		<center><table border = 1 width = 400 height = 400>
			<td  bgcolor = #FCF3F7 ><?php
				
				$姓名 = $_POST["姓名"];
				echo "姓名：".$姓名;
				
				$電話 = $_POST["電話"];
				echo "<tr><td bgcolor = #E4C8D0>電話：".$電話;
				
				
				echo "<tr><td bgcolor = #FCF3F7>預約日期：".$msg_day;
				
				$time = $_POST["time"];
				echo "<tr><td bgcolor = #E4C8D0>預約時間：".$time;
				
				
			?></td></font>
		</center></table>
		 <br>
		 <br>
		<center>____________________________________________________________________
		 <br>
		 <br>
		 <br>
		 
		 </center>
		
	</body>



</html>