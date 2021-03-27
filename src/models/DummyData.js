// 본질에 집중!

const { array } = require("joi");

class MeetingHeader {
    constructor(when, where, who, issues) {
        this.when = when;
        this.where = where;
        this.who = who;
        this.issues = issues;
    }
}

// class MeetingContent {
//     constructor(title, topic, content) {
//         this.title = title
//         this.topic = topic
//         this.content = content
//     }
// }

// class TaskSchedule {
//     constructor(task, who, when, explanation) {
//         this.task = task
//         this.who = who
//         this.when = when
//         this.explanation = explanation
//     }
// }

class Meeting {
    constructor(mid, company, date, title, content) {
        this.mid = mid;
        this.company = company;
        this.date = date;
        this.title = title;
        this.content = content;
    }
    // constructor(MeetingHeader) {
    //     this.MeetingHeader = MeetingHeader
    //     this.content_list = array()
    //     this.task_list = array()
    // }

    // addMeetingContent(MeetingContent) {
    //     this.list.push(MeetingContent)
    // }

    // addTaskSchedule(TaskSchedule) {
    //     this.list.push(TaskSchedule)
    // }
}

const Minutes = [
    new Meeting(1, "compA", "2021-03-27", "meetA", "today compa first meeting"),
    new Meeting(2, "ss", "2021-03-27", "meet1", "today ss first meeting"),
];

module.exports.Minutes = Minutes;
module.exports.Meeting = Meeting;
