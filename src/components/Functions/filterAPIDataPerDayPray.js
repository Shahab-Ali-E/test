import getTodayDate from "./getTodayDate";

export default function filterAPIData(data){
    const todayDate = getTodayDate();

    // Find the data entry for today's date
    const todayData = data.find(entry => entry.date.readable === todayDate);

    if (todayData) {
      // Remove (PKT) from the timings
      const cleanedTimings = Object.fromEntries(
        Object.entries(todayData.timings).map(([key, value]) => [key, value.replace(' (PKT)', '')])
      );
      return cleanedTimings;
    } else {
      return {}; 
    }
}