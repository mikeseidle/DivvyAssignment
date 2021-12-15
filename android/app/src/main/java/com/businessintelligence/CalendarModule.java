package com.businessintelligence;// replace com.your-app-name with your app’s name
import com.facebook.react.bridge.ReactMethod;


import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.github.mikephil.charting.charts.BarLineChartBase;
import com.github.mikephil.charting.charts.Chart;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.components.Description;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.components.YAxis;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.data.LineDataSet;
import com.github.mikephil.charting.formatter.IndexAxisValueFormatter;
import com.github.mikephil.charting.interfaces.datasets.ILineDataSet;
import java.util.ArrayList;

import android.util.Log;

public class CalendarModule extends SimpleViewManager<LineChart> {

    // add to CalendarModule.java
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @Override
    protected LineChart createViewInstance(ThemedReactContext reactContext) {
        LineChart lineChart =  new LineChart(reactContext);
        return lineChart;
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactProp(name = "data")
    public void setData(Chart chart, ReadableArray dataArrayOfMap) {
        //Turn off the Legend
        Legend legend = chart.getLegend();
        legend.setEnabled(false);

        //Set up the X Axis
        XAxis axis = chart.getXAxis();
        axis.setEnabled(true);
        axis.setDrawLabels(true);
        axis.setDrawAxisLine(true);
        axis.setTextSize(8);
        axis.setGranularity(1);
        axis.setValueFormatter(new IndexAxisValueFormatter(convertToStringArray(dataArrayOfMap)));
        axis.setPosition(XAxis.XAxisPosition.valueOf("BOTTOM"));

        //Disable the Description
        Description description = new Description();
        description.setText("");
        chart.setDescription(description);

        //Set up the Y Axis
        BarLineChartBase barLineChart = (BarLineChartBase) chart;
        YAxis leftYAxis = barLineChart.getAxisLeft();
        leftYAxis.setEnabled(true);
        leftYAxis.setDrawLabels(true);
        leftYAxis.setDrawAxisLine(true);
        leftYAxis.setTextSize(8);
        leftYAxis.setGranularity(1);
        YAxis rightYAxis = barLineChart.getAxisRight();
        rightYAxis.setEnabled(false);


        //Create the revenue line and style it
        LineDataSet lineDataSet1 = new LineDataSet(convertToEntrysArray(dataArrayOfMap), "revenue line");
        lineDataSet1.setValueTextSize(16);
        lineDataSet1.setColor(-16747000);
        lineDataSet1.setLineWidth(2);
        lineDataSet1.setCircleRadius(6);
        lineDataSet1.setMode(LineDataSet.Mode.valueOf("CUBIC_BEZIER"));
        lineDataSet1.setCircleColor(-16747340);
        lineDataSet1.setDrawCircleHole(false);

        ArrayList<ILineDataSet> dataSets = new ArrayList<>();
        dataSets.add(lineDataSet1);
        LineData data= new LineData(dataSets);
        chart.setData(data);
    }


    private static String[] convertToStringArray(ReadableArray readableArray) {
        String[] array = new String[readableArray.size()];

        for (int i = 0; i < readableArray.size(); i++) {
            array[i] = readableArray.getMap(i).getString("date");
        }
        return array;
    }

    private ArrayList<Entry> convertToEntrysArray(ReadableArray readableArray){
        ArrayList<Entry> dataVals = new ArrayList<Entry>();

        for (int i = 0; i < readableArray.size(); i++) {
            dataVals.add(new Entry(i, (float) readableArray.getMap(i).getDouble("value")));
        }
        return dataVals;
    }



}

