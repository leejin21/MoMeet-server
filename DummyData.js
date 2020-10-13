// 본질에 집중!

const { array } = require("joi")

class MeetingHeader {
    constructor(when, where, who, issues) {
        this.when = when
        this.where = where
        this.who = who
        this.issues = issues
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
    constructor(when, where, who, issues) {
        this.when = when
        this.where = where
        this.who = who
        this.issues = issues
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
    new Meeting(new Date(2020, 8, 10), "서울", "모두", "맥북 대여 서류 관련"),
    new Meeting(new Date(2020, 9, 10), "충주", "모두", "서버 구매 서류 관련"),
    new Meeting(new Date(2020, 10, 10), "부산", "모두", "보안 업체 외주 서류 관련"),
]

module.exports.Minutes = Minutes
module.exports.Meeting = Meeting