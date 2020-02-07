package com.practice.controller

import com.practice.model.User
import groovy.util.logging.Slf4j
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController


/**
 * @author Vijay.R ,
 * On 10/24/2019,
 * At 11:31 AM.
 */

@RestController
@Slf4j
class UserRestController {
    List<User> users = []

    @GetMapping(value = "/users", produces = "application/json")
    ResponseEntity<List<User>> findUsers() {
        new ResponseEntity<List<User>>(users, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping(value = "/saveUser")
    ResponseEntity<User> saveUser(@RequestBody User user) {
        log.warn " User data to save $user"
        users << user
        new ResponseEntity<User>(user, new HttpHeaders(), HttpStatus.OK)
    }
}
