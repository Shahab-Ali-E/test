export function filterAPIDataPerMonth(data){
    return data.map(item => {
        return [
          item.date.readable,
          item.timings.Fajr.split(' ')[0],
          item.timings.Sunrise.split(' ')[0],
          item.timings.Dhuhr.split(' ')[0],
          item.timings.Asr.split(' ')[0],
          item.timings.Maghrib.split(' ')[0],
          item.timings.Isha.split(' ')[0]
        ];
    });
} 