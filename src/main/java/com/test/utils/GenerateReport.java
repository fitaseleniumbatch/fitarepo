package com.test.utils;

import java.sql.Timestamp;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

import stepdefinitions.StepDefinition;

public class GenerateReport {
	
	WebDriver driver;
	
	
	public static void main(String[] args) throws Throwable {
		// TODO Auto-generated method stub

		StepDefinition sd = new StepDefinition();
		
		  Timestamp timestamp = new Timestamp(System.currentTimeMillis());

		System.out.println(timestamp);
		
		ExtentSparkReporter reporter = new ExtentSparkReporter("./ExtentReport.html");
		
		ExtentReports extent = new ExtentReports();
		
		extent.attachReporter(reporter);
		
	ExtentTest test =	extent.createTest("TC001 - Login Test");
	
	GenerateReport gr = new GenerateReport();
	
	
	
	
		test.fail("Launch browser");
		
		test.fail("Navigate to fb");
		
		test.pass("Login to fb");
	
	
	
	
	extent.flush();
		
		
	}

}
