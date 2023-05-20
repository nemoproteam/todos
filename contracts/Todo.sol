// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Todo {
    struct Task {
        uint256 id;
        uint256 date;
        string content;
        string author;
        bool done;
        address owner;
    }

    uint public ids = 0;
    uint256[] taskIds;
    mapping(uint256 => Task) tasks;
    event EventTask(
        uint256 indexed id,
        uint256 date,
        string content,
        string author,
        bool done,
        address owner
    );

    modifier taskExist(uint256 _id) {
        if (tasks[_id].id == 0) {
            revert();
        }
        _;
    }

    function createTask(string memory _content, string memory _author) public {
        ids++;

        Task memory taskNew = Task(
            ids,
            block.timestamp,
            _content,
            _author,
            false,
            msg.sender
        );

        taskIds.push(ids);
        tasks[ids] = taskNew;

        emit EventTask(
            ids,
            block.timestamp,
            _content,
            _author,
            false,
            msg.sender
        );
    }

    function getTasks() external view returns (Task[] memory) {
        uint256 idsL = taskIds.length;
        Task[] memory allTasks = new Task[](taskIds.length);

        for (uint256 i = 0; i < idsL; i++) {
            allTasks[i] = tasks[i + 1];
        }

        return allTasks;
    }

    function getTask(
        uint256 _id
    ) external view taskExist(_id) returns (Task memory) {
        return tasks[_id];
    }

    function updateTask(
        uint256 _id,
        string memory _content,
        string memory _author
    ) external taskExist(_id) returns (Task memory) {
        emit EventTask(
            _id,
            block.timestamp,
            _content,
            _author,
            false,
            msg.sender
        );
        return Task(_id, block.timestamp, _content, _author, false, msg.sender);
    }
}
