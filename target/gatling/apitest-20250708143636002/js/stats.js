var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "1460",
        "ok": "-",
        "ko": "1460"
    },
    "maxResponseTime": {
        "total": "5059",
        "ok": "-",
        "ko": "5059"
    },
    "meanResponseTime": {
        "total": "3123",
        "ok": "-",
        "ko": "3123"
    },
    "standardDeviation": {
        "total": "753",
        "ok": "-",
        "ko": "753"
    },
    "percentiles1": {
        "total": "3422",
        "ok": "-",
        "ko": "3422"
    },
    "percentiles2": {
        "total": "3556",
        "ok": "-",
        "ko": "3556"
    },
    "percentiles3": {
        "total": "4250",
        "ok": "-",
        "ko": "4250"
    },
    "percentiles4": {
        "total": "5033",
        "ok": "-",
        "ko": "5033"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "-",
        "ko": "90.909"
    }
},
contents: {
"req_request-1-693933697": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-693933697",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "1460",
        "ok": "-",
        "ko": "1460"
    },
    "maxResponseTime": {
        "total": "5059",
        "ok": "-",
        "ko": "5059"
    },
    "meanResponseTime": {
        "total": "3123",
        "ok": "-",
        "ko": "3123"
    },
    "standardDeviation": {
        "total": "753",
        "ok": "-",
        "ko": "753"
    },
    "percentiles1": {
        "total": "3422",
        "ok": "-",
        "ko": "3422"
    },
    "percentiles2": {
        "total": "3556",
        "ok": "-",
        "ko": "3556"
    },
    "percentiles3": {
        "total": "4250",
        "ok": "-",
        "ko": "4250"
    },
    "percentiles4": {
        "total": "5033",
        "ok": "-",
        "ko": "5033"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "-",
        "ko": "90.909"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
