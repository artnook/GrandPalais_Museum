function prevMonth(date) {
  var target = new Date(date);
  target.setDate(1);
  target.setMonth(target.getMonth() - 1);

  return getYmd(target);
}

function nextMonth(date) {
  var target = new Date(date);
  target.setDate(1);
  target.setMonth(target.getMonth() + 1);

  return getYmd(target);
}

function getYmd(target) {
  // IE에서 날짜 문자열에 0이 없으면 인식 못함
  var month = ("0" + (target.getMonth() + 1)).slice(-2);
  return [target.getFullYear(), month, "01"].join("-");
}

function fullDays(date) {
  var target = new Date(date);
  var year = target.getFullYear();
  var month = target.getMonth();

  var firstWeekDay = new Date(year, month, 1).getDay();
  var thisDays = new Date(year, month + 1, 0).getDate();

  // 월 표시 달력이 가지는 셀 갯수는 3가지 가운데 하나이다.
  // var cell = [28, 35, 42].filter(n => n >= (firstWeekDay + thisDays)).shift();
  var cell = [28, 35, 42]
    .filter(function (n) {
      return n >= firstWeekDay + thisDays;
    })
    .shift();

  // 셀 초기화, IE에서 Array.fill()을 지원하지 않아서 변경
  // var days = new Array(cell).fill({date: '', dayNum: '', today: false});
  var days = [];
  for (var i = 0; i < cell; i++) {
    days[i] = {
      date: "",
      dayNum: "",
      today: false,
    };
  }

  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var inDate;
  for (var index = firstWeekDay, i = 1; i <= thisDays; index++, i++) {
    inDate = new Date(year, month, i);
    days[index] = {
      date: i,
      dayNum: inDate.getDay(),
      today: inDate.getTime() === today.getTime(),
    };
  }

  return days;
}
